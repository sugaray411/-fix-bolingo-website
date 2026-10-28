"""Generate responsive WebP variants from photos/*.jpg into public/images/.

Run with `npm run images` after adding or replacing a photo. Each source
produces <name>-<width>.webp for every width up to the source width, and
src/data/image-meta.json records the available widths and aspect ratio so
<ResponsiveImage> can build srcset and reserve space (no layout shift).
"""
import json
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "photos"
OUT = ROOT / "public" / "images"
META = ROOT / "src" / "data" / "image-meta.json"
WIDTHS = [480, 800, 1200, 1600]

OUT.mkdir(parents=True, exist_ok=True)
meta = {}
for path in sorted(SRC.glob("*.jpg")):
    im = Image.open(path).convert("RGB")
    w, h = im.size
    widths = [x for x in WIDTHS if x < w] + [w]
    for x in widths:
        y = round(h * x / w)
        im.resize((x, y), Image.LANCZOS).save(OUT / f"{path.stem}-{x}.webp", "WEBP", quality=78, method=6)
    meta[path.stem] = {"widths": widths, "width": w, "height": h}
    print(f"{path.stem}: {widths}")

META.parent.mkdir(parents=True, exist_ok=True)
META.write_text(json.dumps(meta, indent=2) + "\n")
