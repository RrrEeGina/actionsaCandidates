# Campaign Poster AR

Scan a physical campaign poster with a phone camera; the page uses the
visitor's location to show the right ActionSA candidate before playing a
matching video over the poster.

**Landing page** (before scanning): as soon as the visitor's ward resolves
(their live GPS by default), an animated line appears:
- If we know a specific candidate for that spot — their own ward candidate,
  or (if their ward doesn't have one) the metro's headline candidate for
  Tshwane/Ekurhuleni/Johannesburg — it reads **"GATVOL? LET &lt;NAME&gt; FIX
  IT"**.
- Otherwise (a real, known ward with no candidate on record) it reads
  **"GATVOL? VOTE ACTIONSA IN WARD &lt;NO&gt;"** — never a stand-in person's
  name for a ward that isn't theirs.
- Only when location is totally unavailable does it fall back to the true
  global default (Herman Mashaba, City of Johannesburg).

**Tapping "Start AR scan"**: the camera opens and, once it recognizes the
poster, plays whichever video applies — no further text overlay, since the
"who this is for" messaging already happened on the landing page.

Video priority: ward-specific video → the visitor's metro's fallback video
(Tshwane/Ekurhuleni/Johannesburg) → their district's fallback video (for the
handful of candidates who stood at district level) → the global default
(City of Johannesburg's video, which doubles as `defaultFallback` — there's
no separate global-default asset). If a configured video 404s (not uploaded
yet), it falls back to the global default video while keeping whichever name
was already chosen.

Fully static — no backend, no build step. Three moving parts:

1. **AR image tracking** — [MindAR](https://hiukim.github.io/mind-ar-js-doc/) (open source, MIT), loaded from CDN. Its own built-in scanning/loading/error overlays are disabled (`uiScanning`/`uiLoading`/`uiError: "no"`) since they'd cover our own UI.
2. **Ward/municipality lookup** — the Municipal Demarcation Board's public
   **MDB Wards 2026** feature service, queried live from the browser by GPS
   point:
   `https://services7.arcgis.com/oeoyTUJC8HEeYsRB/arcgis/rest/services/MDB_Wards_2026/FeatureServer`
   CORS is open, no API key needed. Data is MDB's official ward delimitation
   ahead of the 2026 Local Government Elections — public domain with an
   attribution requirement (see the dataset's license on the
   [MDB Open Data Portal](https://dataportal-mdb-sa.opendata.arcgis.com/)).
3. **Your content** — the poster image (compiled to a `.mind` target) and each
   configured municipality's fallback video (one of which doubles as the
   global default), plus optionally per-ward and per-district videos.

## What you still need to add

| File | Purpose |
|---|---|
| `assets/targets/poster.mind` | Compiled AR target — see below |

Already in place: `assets/videos/default-tshwane.mp4`, `default-ekurhuleni.mp4`,
`default-johannesburg.mp4` (copied from `cityoftshwane.mp4`,
`cityofekurhuleni.mp4`, `cityofjoburg.mp4`). `default-johannesburg.mp4` is
also `defaultFallback`'s video.

## Compiling the poster target

MindAR tracks images via a `.mind` file compiled from your poster artwork
(not the raw PDF/PNG). The poster source image is saved at
`assets/poster-source/poster.png` (167×212px — usable, but a higher-resolution
version of the print artwork would track more reliably).

1. Open the [MindAR Image Target Compiler](https://hiukim.github.io/mind-ar-js-doc/tools/compile/),
   drop `assets/poster-source/poster.png` in — **not** a photo of the poster
   in a crowd/event scene, which tracks poorly since it's skewed, small, and
   surrounded by unrelated high-contrast detail — click **Start**, then
   **Download**.
2. Save the result as `assets/targets/poster.mind`.

If you swap in a higher-resolution or different-shaped poster image, also
update the plane aspect ratio in `js/app.js` (search for "Poster aspect
ratio") to match its new width:height.

## Adding ward videos as you get them

Edit `js/config.js`:

```js
wardVideoMap: {
  "79800012": "assets/videos/ward-79800012.mp4", // City of Tshwane, Ward 12
},
```

Keys are MDB `WardID` values (8-digit strings). The easiest way to find one:
`wardCandidateMap` in the same file already lists every ward's WardID as a
comment next to its candidate (e.g. search for `"Moretele, Ward 6"`) — no
need to query anything. You can also look one up directly:
`https://services7.arcgis.com/oeoyTUJC8HEeYsRB/arcgis/rest/services/MDB_Wards_2026/FeatureServer/0/query?f=json&geometry=<lon>,<lat>&geometryType=esriGeometryPoint&inSR=4326&spatialRel=esriSpatialRelIntersects&outFields=WardID,WardNo,MUNICNAME&returnGeometry=false`,
or cross-check via the
[MDB Open Data Portal](https://dataportal-mdb-sa.opendata.arcgis.com/).

### No video yet? Use a photo instead

If a ward has no video but you do have a photo, add it to `wardImageMap`
instead — same WardID keys, checked right after `wardVideoMap`:

```js
wardImageMap: {
  "63701006": "assets/images/ward-63701006.jpg", // Moretele, Ward 6
},
```

Shown as a static image over the poster, same position/size as a video would
be. If the file 404s (typo, wrong extension), it falls back to the global
default video automatically rather than showing a broken image.

If a ward has **both** a video and a photo, the video plays once through
(no looping) and then hands off to the photo, instead of the photo being
ignored — no extra config needed, this is automatic whenever the same
WardID has entries in both maps.

## District candidates

A handful of ActionSA candidates in the IEC list stood under a District
Municipality code (DC10, DC13, ...) rather than a real ward — district
councils in South Africa don't have directly-elected geographic wards of
their own (their seats come indirectly from local municipalities), so these
can't be matched to an MDB `WardID`. Instead `js/config.js`'s
`districtFallbacks` keys them by MDB's `DISTRICT` field (the parent district
of whichever local municipality's ward the visitor is actually standing in):

```js
districtFallbacks: {
  "Sarah Baartman": { candidateName: "Buhle Mdoko", videoSrc: "assets/videos/default-sarah-baartman.mp4" },
  // ...one per district
},
```

Every entry's `videoSrc` points at a file that doesn't exist yet, named
`default-<district-slug>.mp4` — add the video with that exact filename and it
picks up automatically. Until then, the app 404s on that path and falls back
to the global default video, while still showing that district's own
candidate name if the visitor's specific ward has one in `wardCandidateMap` —
otherwise the generic "VOTE ACTIONSA IN WARD &lt;no&gt;" landing text applies.

## Ward candidate names

`wardCandidateMap` in `js/config.js` has **2,166 entries** — essentially every
ActionSA ward candidate nationwide — generated from the IEC's certified
candidate list PDF (`~/Downloads/LGE2026 Certified Candidates
List_16092026.pdf`) via three scripts, run in order:

1. **`scripts/extract_candidates.py`** — pulls every line containing
   "ACTIONSA" from all 2,137 pages into `data/actionsa_all_rows.json`, keeping
   each row's raw ward/list-order number as printed (no filtering yet).
2. **`scripts/classify_and_match.py`** — the tricky part. The IEC's "Ward \
   List Order" column serves double duty and its format is **inconsistent
   across municipalities**: some print a plain small number (`1`, `19`) for
   real ward candidates and a separate 8-digit code for party-list positions;
   others do the exact opposite — a plain small number for their party-list
   leader, and *expanded, MDB-style 8-digit WardIDs* (e.g. `63701019` = ward
   `019` of municipality `637`+`01`) for their real per-ward candidates.
   Digit count alone can't tell these apart. The reliable signal turned out to
   be **name repetition**: a genuine party list reuses a small pool of people
   across many positions (heavy duplicate names), while real per-ward
   candidates are almost all unique names. So for each municipality, the
   script checks the name-uniqueness ratio of its 8-digit-code rows — ≥70%
   unique means "these are real wards" (derive the ward number from the last
   3 digits), otherwise "this is a party list" (use the plain small number
   instead, the original assumption). It then queries the same MDB API the
   live site uses to resolve each to a real `WardID`, and writes the result to
   `data/actionsa_ward_candidates.json`.
3. **`scripts/retry_failed.py`** — the ~2,500 sequential MDB queries in step 2
   hit occasional transient network errors (timeouts, 503s); this retries
   just the ones that failed and merges the results back in.

The final `wardCandidateMap` snippet is regenerated from
`data/actionsa_ward_candidates.json` and spliced into `js/config.js`. If the
IEC releases an updated candidate list, rerun all three scripts in order,
then regenerate and re-splice the snippet.

Note: `municipalityFallbacks`' headline candidates (Hazel Nasiphi Moya /
Suprise Xolani Khumalo / Herman Mashaba) are each their metro's ActionSA
**party-list leader**, not literally their "Ward 1" candidate — that's a
separate, correct concept from `wardCandidateMap` and doesn't need updating
when the ward data changes.

## Running it locally

Camera and geolocation only work in a "secure context" (HTTPS, or
`localhost`). Serve the folder, don't open `index.html` directly as a file:

```bash
npx serve .
# or
python -m http.server 8000
```

Then open the printed `localhost` URL **on the phone you'll test with**, or
use a tunnel to get an HTTPS URL you can open on a phone away from your dev
machine. `npx localtunnel --port 8000` works but has been unreliable in
testing (dropped connections, a content-type bug that prompts a download
instead of loading the page); `npx cloudflared tunnel --url http://localhost:8000`
has been more reliable and needs no signup for a quick tunnel.

Videos start muted — mobile browsers block audible autoplay outside a direct
tap, and the video only starts once the camera recognizes the poster, not
when you tap Start. Tap the "🔇 Tap for sound" button (bottom-right) once the
video is playing to turn audio on.

### Testing different wards without traveling

There's no in-page debug panel — it was removed so real visitors never see
testing controls. To preview a different location, use your browser or OS's
own location override (e.g. Chrome DevTools → Sensors → Location) before
loading the page.

## Deploying

Any static host works (GitHub Pages, Netlify, Vercel, S3+CloudFront) — all
dependencies (MindAR, three.js, the MDB API) are fetched over HTTPS from the
client, so there's nothing to configure server-side.
