#!/usr/bin/env bash
set -euo pipefail
root="$(cd "$(dirname "$0")" && pwd)"
filter="${1:-all}"
node "$root/printables/build-printables.js"
node -e 'const fs=require("fs"),m=JSON.parse(fs.readFileSync(process.argv[1]));for(const p of m.packs)if(process.argv[2]==="all"||p.slug===process.argv[2])console.log(p.slug)' "$root/printables/manifest.json" "$filter" | while read -r slug; do
  dir="$root/printables/$slug"
  pdf="$dir/$slug-complete-pack.pdf"
  google-chrome --headless --no-sandbox --disable-gpu --allow-file-access-from-files --user-data-dir="/tmp/simk-export-$slug" --print-to-pdf="$pdf" --no-pdf-header-footer "file://$dir/$slug-complete-pack.html" >/dev/null 2>&1
  mkdir -p "$dir/png-pages"
  find "$dir/png-pages" -maxdepth 1 -type f -name '*.png' -delete
  pdftoppm -png -r 300 "$pdf" "$dir/png-pages/$slug-page" >/dev/null 2>&1
  echo "Exported $slug"
done
