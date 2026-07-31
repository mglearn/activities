# Activity images

One image per activity, named `<slug>.webp` (source prompts + slugs are in
`../../image-prompts.md`). The site references **.webp**; missing files hide gracefully.

**Workflow:** generate images as PNG (any size ~1200×600), drop them here named
`<slug>.png`, then from the `sayitmakeit/` folder run `bash convert-images.sh`
to convert them to WebP (≈95% smaller) and remove the PNGs. Commit the `.webp`.
