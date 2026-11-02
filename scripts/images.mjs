// Make AVIF + WebP next to every JPG/PNG in public/assets: node scripts/images.mjs
import sharp from 'sharp';
import { readdirSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';
const walk = (d) => readdirSync(d).flatMap((f) => (statSync(join(d, f)).isDirectory() ? walk(join(d, f)) : [join(d, f)]));
for (const f of walk('public/assets').filter((f) => /\.(jpe?g|png)$/i.test(f))) {
  const stem = f.slice(0, -extname(f).length);
  await sharp(f).avif({ quality: 55 }).toFile(stem + '.avif');
  await sharp(f).webp({ quality: 78 }).toFile(stem + '.webp');
  console.log(f, '→ avif', (statSync(stem + '.avif').size / 1024).toFixed(0) + 'K, webp', (statSync(stem + '.webp').size / 1024).toFixed(0) + 'K');
}
