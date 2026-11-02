// Prefix site paths with the deploy base (e.g. /portfolio on GitHub Pages).
const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const url = (path: string) => (/^(https?:|mailto:|#)/.test(path) ? path : base + path);

// CSS background for a cover: AVIF → WebP → original, via image-set (see scripts/images.mjs).
export const bg = (src: string) => {
  const u = url(src), stem = u.replace(/\.(jpe?g|png)$/i, '');
  return `image-set(url('${stem}.avif') type('image/avif'), url('${stem}.webp') type('image/webp'), url('${u}') type('image/jpeg'))`;
};
