import json, time, urllib.parse, urllib.request

IN_PATH = "data/actionsa_ward_candidates.json"
QUERY_URL = "https://services7.arcgis.com/oeoyTUJC8HEeYsRB/arcgis/rest/services/MDB_Wards_2026/FeatureServer/0/query"


def query_ward(cat_b, ward_no):
    where = f"CAT_B='{cat_b}' AND WardNo={ward_no}"
    params = urllib.parse.urlencode({
        "f": "json", "where": where,
        "outFields": "WardID,WardNo,MUNICNAME",
        "returnGeometry": "false",
    })
    with urllib.request.urlopen(f"{QUERY_URL}?{params}", timeout=20) as resp:
        data = json.load(resp)
    features = data.get("features", [])
    return features[0]["attributes"] if features else None


def main():
    with open(IN_PATH, encoding="utf-8") as f:
        d = json.load(f)

    still_failed = []
    newly_resolved = []
    remaining_unresolved = []

    for r in d["unresolved"]:
        if "derivedWardNo" in r:
            remaining_unresolved.append(r)  # genuine no-ward (district code), keep as-is
            continue
        ward_no = int(r["wardOrList"][-3:]) if len(r["wardOrList"]) > 3 else int(r["wardOrList"])
        attrs = None
        for attempt in range(3):
            try:
                attrs = query_ward(r["catB"], ward_no)
                break
            except Exception as e:
                print(f"  retry {attempt+1} failed for {r['catB']} ward {ward_no}: {e}")
                time.sleep(2)
        if attrs:
            newly_resolved.append({**r, "wardNo": ward_no, "wardId": attrs["WardID"], "municnameApi": attrs["MUNICNAME"]})
        else:
            still_failed.append(r)
        time.sleep(0.2)

    d["resolved"].extend(newly_resolved)
    d["unresolved"] = remaining_unresolved + still_failed

    with open(IN_PATH, "w", encoding="utf-8") as f:
        json.dump(d, f, indent=2, ensure_ascii=False)

    print(f"Newly resolved: {len(newly_resolved)}. Still failed: {len(still_failed)}.")
    for r in newly_resolved:
        print(" ", r["wardId"], r["name"])
    if still_failed:
        print("Still failed:", still_failed)


if __name__ == "__main__":
    main()
