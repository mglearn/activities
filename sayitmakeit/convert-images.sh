#!/usr/bin/env bash
# Convert any PNG/JPG in assets/ (and assets/act/) to WebP and remove the original.
# The site references .webp. Run after dropping new images in:  bash convert-images.sh
set -euo pipefail
cd "$(dirname "$0")"
q="${1:-85}"
n=0
while IFS= read -r img; do
  webp="${img%.*}.webp"
  if magick "$img" -quality "$q" -define webp:method=6 "$webp" 2>/dev/null && [ -s "$webp" ]; then
    rm -f "$img"; n=$((n+1)); echo "  ✓ ${webp#assets/}"
  else
    echo "  ✗ FAILED: $img" >&2
  fi
done < <(find assets \( -iname '*.png' -o -iname '*.jpg' -o -iname '*.jpeg' \))
echo "Converted $n image(s) to WebP (quality $q)."
