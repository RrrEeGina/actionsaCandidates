import json, time, urllib.parse, urllib.request
from collections import defaultdict

IN_PATH = "data/actionsa_all_rows.json"
OUT_PATH = "data/actionsa_ward_candidates.json"
QUERY_URL = "https://services7.arcgis.com/oeoyTUJC8HEeYsRB/arcgis/rest/services/MDB_Wards_2026/FeatureServer/0/query"
UNIQUENESS_THRESHOLD = 0.7  # long-bucket names mostly unique => real per-ward candidates, not a recycled PR list


def query_ward(cat_b, ward_no):
    where = f"CAT_B='{cat_b}' AND WardNo={ward_no}"
    params = urllib.parse.urlencode({
        "f": "json", "where": where,
        "outFields": "WardID,WardNo,MUNICNAME",
        "returnGeometry": "false",
    })
    with urllib.request.urlopen(f"{QUERY_URL}?{params}", timeout=15) as resp:
        data = json.load(resp)
    features = data.get("features", [])
    return features[0]["attributes"] if features else None


def main():
    with open(IN_PATH, encoding="utf-8") as f:
        rows = json.load(f)["records"]

    by_catb = defaultdict(list)
    for r in rows:
        if r["catB"]:
            by_catb[r["catB"]].append(r)

    print(f"Total rows: {len(rows)}. Municipalities/districts with rows: {len(by_catb)}")

    resolved = []
    unresolved = []
    classification_log = []

    for cat_b, group in sorted(by_catb.items()):
        short_rows = [r for r in group if len(r["wardOrList"]) <= 3]
        long_rows = [r for r in group if len(r["wardOrList"]) > 3]

        chosen = None
        reason = ""
        if long_rows:
            unique_ratio = len(set(r["name"] for r in long_rows)) / len(long_rows)
            if unique_ratio >= UNIQUENESS_THRESHOLD:
                chosen = long_rows
                reason = f"long block used ({len(long_rows)} rows, {unique_ratio:.0%} unique names => real per-ward candidates)"
            else:
                chosen = short_rows
                reason = f"long block rejected ({len(long_rows)} rows, only {unique_ratio:.0%} unique names => PR list); using {len(short_rows)} short row(s)"
        else:
            chosen = short_rows
            reason = f"no long block; using {len(short_rows)} short row(s)"

        classification_log.append((cat_b, len(group), len(short_rows), len(long_rows), reason))

        if not chosen:
            continue

        for r in chosen:
            ward_no = int(r["wardOrList"][-3:]) if len(r["wardOrList"]) > 3 else int(r["wardOrList"])
            try:
                attrs = query_ward(cat_b, ward_no)
            except Exception as e:
                print(f"  ! query failed for {cat_b} ward {ward_no}: {e}")
                unresolved.append(r)
                continue
            if not attrs:
                unresolved.append({**r, "derivedWardNo": ward_no})
                continue
            resolved.append({
                **r,
                "wardNo": ward_no,
                "wardId": attrs["WardID"],
                "municnameApi": attrs["MUNICNAME"],
            })
            time.sleep(0.03)

    # Check for wardId collisions (two different rows resolving to the same ward)
    by_ward_id = defaultdict(list)
    for r in resolved:
        by_ward_id[r["wardId"]].append(r)
    collisions = {k: v for k, v in by_ward_id.items() if len(v) > 1}

    print(f"\nResolved: {len(resolved)}. Unresolved: {len(unresolved)}. WardID collisions: {len(collisions)}")
    print("\n--- Classification per municipality/district ---")
    for cat_b, total_n, n_short, n_long, reason in classification_log:
        print(f"  {cat_b}: total={total_n} short={n_short} long={n_long} -- {reason}")

    if collisions:
        print("\n--- COLLISIONS (need manual review) ---")
        for ward_id, entries in collisions.items():
            print(f"  {ward_id}:")
            for e in entries:
                print(f"    {e}")

    if unresolved:
        print(f"\n--- Unresolved rows ({len(unresolved)}) ---")
        for r in unresolved[:30]:
            print(f"  {r}")

    with open(OUT_PATH, "w", encoding="utf-8") as f:
        json.dump({"resolved": resolved, "unresolved": unresolved, "collisions": collisions}, f, indent=2, ensure_ascii=False)


if __name__ == "__main__":
    main()
