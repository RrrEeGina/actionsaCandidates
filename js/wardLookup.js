// Client-side lookup against the Municipal Demarcation Board's open "MDB Wards 2026"
// feature service. Public, CORS-enabled, no API key. Confirmed live 2026-09-28:
// https://services7.arcgis.com/oeoyTUJC8HEeYsRB/arcgis/rest/services/MDB_Wards_2026/FeatureServer
const MDB_WARDS_QUERY_URL =
  "https://services7.arcgis.com/oeoyTUJC8HEeYsRB/arcgis/rest/services/MDB_Wards_2026/FeatureServer/0/query";

/**
 * @param {number} lat WGS84 latitude
 * @param {number} lon WGS84 longitude
 * @param {number} [timeoutMs] Abort and throw if the API hasn't responded by
 *   then — a flaky mobile connection shouldn't hang the app indefinitely.
 *   Callers should catch this like any other lookup failure and fall back.
 * @returns {Promise<{wardId: string, wardNo: number, municipality: string, district: string, province: string, catB: string} | null>}
 */
export async function lookupWard(lat, lon, timeoutMs = 8000) {
  const params = new URLSearchParams({
    f: "json",
    geometry: `${lon},${lat}`,
    geometryType: "esriGeometryPoint",
    inSR: "4326",
    spatialRel: "esriSpatialRelIntersects",
    outFields: "WardID,WardNo,MUNICNAME,DISTRICT,Province,CAT_B",
    returnGeometry: "false",
  });

  const res = await fetch(`${MDB_WARDS_QUERY_URL}?${params}`, { signal: AbortSignal.timeout(timeoutMs) });
  if (!res.ok) throw new Error(`MDB ward lookup failed: HTTP ${res.status}`);

  const data = await res.json();
  const feature = data.features?.[0];
  if (!feature) return null; // point falls outside all ward polygons (e.g. off the coast, out of country)

  const a = feature.attributes;
  return {
    wardId: a.WardID,
    wardNo: a.WardNo,
    municipality: a.MUNICNAME,
    district: a.DISTRICT,
    province: a.Province,
    catB: a.CAT_B,
  };
}

/**
 * Wraps navigator.geolocation in a promise with a timeout, resolving to null
 * instead of throwing when location is unavailable/denied/slow — callers should
 * treat null as "fall back to the default video", not as a fatal error.
 * @param {number} timeoutMs
 * @returns {Promise<{lat: number, lon: number} | null>}
 */
export function getCurrentPosition(timeoutMs) {
  return new Promise((resolve) => {
    if (!("geolocation" in navigator)) {
      resolve(null);
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => resolve({ lat: pos.coords.latitude, lon: pos.coords.longitude }),
      () => resolve(null),
      { enableHighAccuracy: true, timeout: timeoutMs, maximumAge: 60000 }
    );
  });
}
