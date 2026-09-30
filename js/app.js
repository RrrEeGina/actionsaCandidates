import * as THREE from "three";
import { MindARThree } from "mindar-image-three";
import { CONFIG } from "./config.js";
import { lookupWard, getCurrentPosition } from "./wardLookup.js";

const statusLine = document.querySelector("#statusLine");
const startButton = document.querySelector("#startButton");
const soundToggle = document.querySelector("#soundToggle");
const scanPrompt = document.querySelector("#scanPrompt");
const landingText = document.querySelector("#landingText");
const landingLine2 = document.querySelector("#landingLine2");

let currentPlan = null;

function setStatus(text) {
  statusLine.textContent = text;
}

// Decide what to show, and which candidate name (if any) belongs to it. A
// specific person's name is only ever shown when it's genuinely theirs — an
// exact ward match, or one of the 3 metros' own mayoral candidate. A
// district's "headline" candidate (e.g. Bojanala's Josephine Ramolobeng)
// does NOT represent every ward in that district, so it's never shown as a
// stand-in name — those wards instead get a generic "VOTE ACTIONSA IN WARD
// <no>" (see updatePlan). Priority order:
//   1. A ward-specific video — already tailored to its area.
//   2. A ward-specific image, if there's no video yet but a photo exists.
//   3. A municipality fallback video (visitor's ward is inside a configured
//      local/metro municipality but has no video/image of its own).
//   4. A district fallback video (visitor's ward's parent DISTRICT is
//      configured — for candidates who stood at district level, with no
//      local-municipality ward of their own).
//   5. The global default video (City of Johannesburg's) — anywhere else,
//      including when location is unavailable or the ward lookup fails.
async function resolveVideoPlan() {
  const coords = await getCurrentPosition(CONFIG.geolocationTimeoutMs);

  // The true last resort, used only when we don't even know a ward number —
  // Herman Mashaba's name here is a genuine national fallback, not a stand-in
  // for a specific area.
  const useUnknownLocationFallback = (reason) => {
    setStatus(reason);
    return {
      mediaType: "video",
      mediaSrc: CONFIG.defaultFallback.videoSrc,
      candidateName: CONFIG.defaultFallback.candidateName,
      wardNo: null,
      isFallback: true,
    };
  };

  if (!coords) {
    return useUnknownLocationFallback("Location unavailable — playing default video.");
  }

  try {
    const ward = await lookupWard(coords.lat, coords.lon, CONFIG.wardLookupTimeoutMs);
    if (!ward) {
      return useUnknownLocationFallback("Outside known ward boundaries — playing default video.");
    }

    const wardVideo = CONFIG.wardVideoMap[ward.wardId];
    if (wardVideo) {
      setStatus(`Ward ${ward.wardNo}, ${ward.municipality} — playing local video.`);
      return { mediaType: "video", mediaSrc: wardVideo, candidateName: null, wardNo: ward.wardNo, isFallback: false };
    }

    // This ward's own candidate, if ActionSA fielded one directly for it —
    // takes priority over every tier below when present.
    const candidateName = CONFIG.wardCandidateMap[ward.wardId];

    const wardImage = CONFIG.wardImageMap[ward.wardId];
    if (wardImage) {
      setStatus(`Ward ${ward.wardNo}, ${ward.municipality} — no video yet, showing local photo.`);
      return { mediaType: "image", mediaSrc: wardImage, candidateName: candidateName ?? null, wardNo: ward.wardNo, isFallback: false };
    }

    const municipalityFallback = CONFIG.municipalityFallbacks[ward.municipality];
    if (municipalityFallback) {
      setStatus(`Ward ${ward.wardNo}, ${ward.municipality} — no local video yet, playing ${candidateName ?? municipalityFallback.candidateName}'s video.`);
      return { mediaType: "video", mediaSrc: municipalityFallback.videoSrc, candidateName: candidateName ?? municipalityFallback.candidateName, wardNo: ward.wardNo, isFallback: true };
    }

    const districtFallback = CONFIG.districtFallbacks[ward.district];
    if (districtFallback) {
      setStatus(candidateName
        ? `Ward ${ward.wardNo}, ${ward.district} district — playing ${candidateName}'s district video.`
        : `Ward ${ward.wardNo}, ${ward.district} district — no candidate on record for this ward, playing the district video.`);
      return { mediaType: "video", mediaSrc: districtFallback.videoSrc, candidateName: candidateName ?? null, wardNo: ward.wardNo, isFallback: true };
    }

    setStatus(candidateName
      ? `Ward ${ward.wardNo}, ${ward.municipality} — playing ${candidateName}'s default video.`
      : `Ward ${ward.wardNo}, ${ward.municipality} — no candidate on record, playing default video.`);
    return { mediaType: "video", mediaSrc: CONFIG.defaultFallback.videoSrc, candidateName: candidateName ?? null, wardNo: ward.wardNo, isFallback: true };
  } catch (err) {
    console.error("Ward lookup failed", err);
    return useUnknownLocationFallback("Ward lookup failed — playing default video.");
  }
}

// Resolves the plan once on load and updates the landing page's animated
// text: "GATVOL? LET <NAME> FIX IT" when we have a real candidate for this
// ward or metro, or "GATVOL? VOTE ACTIONSA IN WARD <no>" when we only know
// the ward number.
async function updatePlan() {
  startButton.disabled = true;
  setStatus("Finding your ward…");
  currentPlan = await resolveVideoPlan();

  if (currentPlan.candidateName) {
    landingLine2.innerHTML = `LET <span class="landing-highlight">${currentPlan.candidateName.toUpperCase()}</span> FIX IT`;
    landingText.hidden = false;
  } else if (currentPlan.wardNo) {
    landingLine2.innerHTML = `VOTE ACTIONSA IN <span class="landing-highlight">WARD ${currentPlan.wardNo}</span>`;
    landingText.hidden = false;
  } else {
    landingText.hidden = true;
  }
  startButton.disabled = false;
}

// Sums the rendered width of a run of {text, color} segments at the current font.
function measureSegments(ctx, segments) {
  return segments.reduce((sum, s) => sum + ctx.measureText(s.text).width, 0);
}

// Shrinks the font until the whole segment run fits within maxWidth.
function fitSegmentsFontSize(ctx, segments, maxWidth, maxFontSize, minFontSize, fontWeight, fontFamily) {
  const font = (size) => `${fontWeight} ${Math.floor(size)}px ${fontFamily}`;
  let size = maxFontSize;
  ctx.font = font(size);
  while (size > minFontSize && measureSegments(ctx, segments) > maxWidth) {
    size -= 1;
    ctx.font = font(size);
  }
  return size;
}

// Draws a run of {text, color} segments as one centered line, e.g. white
// "LET " + green "NAME" + white " FIX IT" reading as a single sentence.
function drawCenteredSegments(ctx, segments, centerX, y, fontSize, fontWeight, fontFamily) {
  ctx.font = `${fontWeight} ${Math.floor(fontSize)}px ${fontFamily}`;
  const totalWidth = measureSegments(ctx, segments);
  let x = centerX - totalWidth / 2;
  ctx.textAlign = "left";
  ctx.textBaseline = "middle";
  for (const seg of segments) {
    ctx.fillStyle = seg.color;
    ctx.fillText(seg.text, x, y);
    x += ctx.measureText(seg.text).width;
  }
}

// Draws the caption shown over the bottom of the playing video: "LET <name>
// FIX IT" / "VOTE ACTIONSA" when we have a real candidate for this ward or
// metro, or "VOTE ACTIONSA IN WARD <no>" when we only know the ward number —
// mirrors the landing page's text exactly, so the message is consistent
// whether you're looking at the poster before or during playback.
function drawVideoCaption(ctx, canvas, plan) {
  const { width, height } = canvas;
  const fontWeight = "bold";
  const fontFamily = "system-ui, sans-serif";
  const maxWidth = width * 0.92;

  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "rgba(0, 0, 0, 0.6)";
  ctx.fillRect(0, 0, width, height);

  if (plan.candidateName) {
    const line1 = [
      { text: "LET ", color: "#ffffff" },
      { text: plan.candidateName.toUpperCase(), color: "#3fe86a" },
      { text: " FIX IT", color: "#ffffff" },
    ];
    const line2 = [{ text: "VOTE ACTIONSA", color: "#ffffff" }];
    const size1 = fitSegmentsFontSize(ctx, line1, maxWidth, height * 0.24, height * 0.09, fontWeight, fontFamily);
    drawCenteredSegments(ctx, line1, width / 2, height * 0.38, size1, fontWeight, fontFamily);
    const size2 = fitSegmentsFontSize(ctx, line2, maxWidth, height * 0.2, height * 0.09, fontWeight, fontFamily);
    drawCenteredSegments(ctx, line2, width / 2, height * 0.74, size2, fontWeight, fontFamily);
  } else if (plan.wardNo) {
    const line1 = [
      { text: "VOTE ACTIONSA IN ", color: "#ffffff" },
      { text: `WARD ${plan.wardNo}`, color: "#3fe86a" },
    ];
    const size1 = fitSegmentsFontSize(ctx, line1, maxWidth, height * 0.22, height * 0.09, fontWeight, fontFamily);
    drawCenteredSegments(ctx, line1, width / 2, height / 2, size1, fontWeight, fontFamily);
  }
}

async function main() {
  const mindarThree = new MindARThree({
    container: document.querySelector("#container"),
    imageTargetSrc: CONFIG.targetSrc,
    // MindAR's built-in scanning/loading/error overlays sit on top of our own
    // UI (landingText, scanPrompt, statusLine) and were covering them up.
    uiScanning: "no",
    uiLoading: "no",
    uiError: "no",
  });

  const { renderer, scene, camera } = mindarThree;
  const anchor = mindarThree.addAnchor(0);

  // Poster aspect ratio: the actual poster artwork is 167x212px (h/w ≈ 1.27).
  // Recompute this if you recompile the target from a different-shaped image.
  const geometry = new THREE.PlaneGeometry(1, 1.2695);

  const video = document.createElement("video");
  video.loop = true;
  // Starts muted: mobile browsers (especially iOS Safari) block audible
  // autoplay unless play() happens in direct response to a tap, but the video
  // only starts once the camera recognizes the poster — an async event, not a
  // tap. Muted autoplay is always allowed; #soundToggle below lets the
  // visitor opt into audio with a real tap.
  video.muted = true;
  video.playsInline = true;
  video.crossOrigin = "anonymous";
  const videoTexture = new THREE.VideoTexture(video);
  videoTexture.colorSpace = THREE.SRGBColorSpace;

  const material = new THREE.MeshBasicMaterial({ map: videoTexture });
  const plane = new THREE.Mesh(geometry, material);
  anchor.group.add(plane);

  soundToggle.addEventListener("click", () => {
    video.muted = !video.muted;
    soundToggle.textContent = video.muted ? "🔇 Tap for sound" : "🔊 Sound on";
  });

  let mediaMode = "video"; // "video" or "image" — set once currentPlan is known, see startButton handler

  anchor.onTargetLost = () => {
    if (mediaMode === "video") video.pause();
    scanPrompt.hidden = false;
  };

  anchor.onTargetFound = () => {
    scanPrompt.hidden = true;
    if (mediaMode === "video") {
      video.play().catch((err) => console.warn("Video play blocked", err));
      soundToggle.hidden = false;
    }
  };

  function switchToVideo(src) {
    mediaMode = "video";
    soundToggle.hidden = false;
    material.map = videoTexture;
    material.needsUpdate = true;
    video.src = src;
    video.play().catch((err) => console.warn("Video play blocked", err));
  }

  startButton.addEventListener("click", async () => {
    startButton.dataset.started = "true";

    if (currentPlan.mediaType === "image") {
      mediaMode = "image";
      soundToggle.hidden = true;
      new THREE.TextureLoader().load(
        currentPlan.mediaSrc,
        (texture) => {
          texture.colorSpace = THREE.SRGBColorSpace;
          material.map = texture;
          material.needsUpdate = true;
        },
        undefined,
        (err) => {
          console.warn(`Image not found: ${currentPlan.mediaSrc} — falling back to the default video.`, err);
          switchToVideo(CONFIG.defaultFallback.videoSrc);
        }
      );
    } else {
      video.src = currentPlan.mediaSrc;

      // A municipality/district/default fallback's video may not be uploaded
      // yet — if it fails to load, drop back to the global default video
      // instead of showing a broken player.
      let firedVideoFallback = false;
      video.addEventListener("error", () => {
        const alreadyOnDefault = currentPlan.mediaSrc === CONFIG.defaultFallback.videoSrc;
        if (!currentPlan.isFallback || alreadyOnDefault || firedVideoFallback) return;
        firedVideoFallback = true;
        console.warn(`Video not found: ${currentPlan.mediaSrc} — falling back to the default video.`);
        switchToVideo(CONFIG.defaultFallback.videoSrc);
      });
    }

    // Caption overlaid on the bottom of the poster's video/image (not just
    // the landing page), so the message stays visible during playback too.
    // Skipped only for direct ward-specific media (already fully localized
    // content, no candidateName or wardNo needed).
    if (currentPlan.candidateName || currentPlan.wardNo) {
      const captionCanvas = document.createElement("canvas");
      captionCanvas.width = 512;
      captionCanvas.height = 180;
      const captionCtx = captionCanvas.getContext("2d");
      drawVideoCaption(captionCtx, captionCanvas, currentPlan);
      const captionTexture = new THREE.CanvasTexture(captionCanvas);
      const captionAspect = 180 / 512;
      const captionGeometry = new THREE.PlaneGeometry(1, captionAspect);
      const captionMaterial = new THREE.MeshBasicMaterial({ map: captionTexture, transparent: true });
      const captionMesh = new THREE.Mesh(captionGeometry, captionMaterial);
      // Overlaps the lower part of the poster/video plane, offset slightly
      // toward the camera (+z) so it renders in front without z-fighting.
      captionMesh.position.set(0, -1.2695 / 2 + captionAspect / 2, 0.01);
      anchor.group.add(captionMesh);
    }

    setStatus("Point your camera at the poster…");
    scanPrompt.hidden = false;
    await mindarThree.start();
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
    });
  });
}

updatePlan();
main().catch((err) => {
  console.error(err);
  setStatus("Failed to start AR — check camera/location permissions.");
});
