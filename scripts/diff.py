# Compare two screenshot folders: python3 scripts/diff.py before/ after/ [outDir]
import sys, os
from PIL import Image, ImageChops
a, b = sys.argv[1], sys.argv[2]
out = sys.argv[3] if len(sys.argv) > 3 else None
for f in sorted(os.listdir(a)):
    if not os.path.exists(os.path.join(b, f)): print(f, 'missing'); continue
    A = Image.open(os.path.join(a, f)).convert('RGB'); B = Image.open(os.path.join(b, f)).convert('RGB')
    h = min(A.height, B.height)
    d = ImageChops.difference(A.crop((0, 0, A.width, h)), B.crop((0, 0, B.width, h))).convert('L').point(lambda v: 255 if v > 24 else 0)
    n = sum(d.histogram()[255:]); pct = 100 * n / (A.width * h)
    box = d.getbbox()
    print(f"{f:40s} h {A.height}->{B.height}  diff {pct:5.2f}%  first@{box[1] if box else '-'}")
    if out and box: os.makedirs(out, exist_ok=True); B.crop((0, max(0, box[1] - 150), B.width, min(h, box[1] + 500))).save(os.path.join(out, f))
