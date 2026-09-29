import json, re, sys, time
from collections import defaultdict
from pypdf import PdfReader

PDF_PATH = r"C:\Users\ReginaKgatle\Downloads\LGE2026 Certified Candidates List_16092026.pdf"
PARTY_FILTER = "ACTIONSA"
OUT_PATH = "data/actionsa_all_rows.json"
CHECKPOINT_EVERY = 100

PROVINCES = [
    "Eastern Cape", "Free State", "Gauteng", "KwaZulu-Natal", "Limpopo",
    "Mpumalanga", "Northern Cape", "North West", "Western Cape",
]
PROVINCES_SORTED = sorted(PROVINCES, key=len, reverse=True)

LINE_RE = re.compile(
    r"^(?P<prefix>.+?)\s+" + re.escape(PARTY_FILTER) +
    r"\s+(?P<wardOrList>\d+?)\s*(?P<idnum>\d{6}\*{4}\d{2}\*)\s+(?P<name>.+)$"
)
PAGE_FOOTER_RE = re.compile(r"\s*Page\s+\d+\s+of\s+\d+\s*$", re.IGNORECASE)


def split_province_municipality(prefix):
    for prov in PROVINCES_SORTED:
        if prefix.startswith(prov + " "):
            return prov, prefix[len(prov):].strip()
    return None, prefix.strip()


def save(records, last_page):
    with open(OUT_PATH, "w", encoding="utf-8") as f:
        json.dump({"lastPageProcessed": last_page, "records": records}, f, indent=2, ensure_ascii=False)


def main():
    t0 = time.time()
    records = []  # every ACTIONSA row, unfiltered: {province, municipality, catB, wardOrList (raw str), name}
    unmatched_lines = 0
    failed_pages = []

    reader = PdfReader(PDF_PATH)
    total = len(reader.pages)

    for i in range(total):
        try:
            text = reader.pages[i].extract_text() or ""
        except Exception as e:
            failed_pages.append(i + 1)
            print(f"  ! page {i+1} failed to extract ({type(e).__name__}: {e}) — skipping", file=sys.stderr)
            continue

        for line in text.split("\n"):
            if PARTY_FILTER not in line:
                continue
            m = LINE_RE.match(line.strip())
            if not m:
                unmatched_lines += 1
                continue
            province, municipality = split_province_municipality(m.group("prefix"))
            cat_b = municipality.split(" - ")[0].strip() if " - " in municipality else None
            name = PAGE_FOOTER_RE.sub("", " ".join(m.group("name").split())).strip()
            records.append({
                "province": province,
                "municipality": municipality,
                "catB": cat_b,
                "wardOrList": m.group("wardOrList"),
                "name": name,
            })

        if (i + 1) % 20 == 0:
            import gc
            reader.resolved_objects.clear()
            gc.collect()

        if (i + 1) % CHECKPOINT_EVERY == 0 or (i + 1) == total:
            elapsed = time.time() - t0
            print(f"  page {i+1}/{total}  ({elapsed:.1f}s elapsed)  rows so far: {len(records)}", file=sys.stderr)
            save(records, i + 1)

    print(f"Done in {time.time()-t0:.1f}s. Total ACTIONSA rows: {len(records)}. "
          f"Unmatched lines: {unmatched_lines}. Failed pages: {failed_pages}", file=sys.stderr)
    save(records, total)


if __name__ == "__main__":
    main()
