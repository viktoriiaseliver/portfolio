// Copy in [brackets] is still to be written by the owner.
// Production hides it; `npm run dev` shows it as a marked draft so gaps are easy to spot.
export const SHOW_PLACEHOLDERS = import.meta.env.DEV;
export const isPh = (v: unknown) => typeof v === 'string' && /\[[^\]]*\]/.test(v);
export const filled = (v: unknown) => v != null && v !== '' && !isPh(v);
/** Keep an item when it is filled, or when drafts are shown. */
export const visible = (v: unknown) => filled(v) || (SHOW_PLACEHOLDERS && v != null && v !== '');
