// Prefix site paths with the deploy base (e.g. /portfolio on GitHub Pages).
const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const url = (path: string) => (/^(https?:|mailto:|#)/.test(path) ? path : base + path);
