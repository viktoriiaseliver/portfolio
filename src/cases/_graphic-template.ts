import type { GraphicCase } from './types';

// Template for graphic & illustration projects. Copy this file, rename it (no leading underscore),
// fill the [brackets] and remove `draft`. Drafts show only in `npm run dev`.
export default {
  layout: 'graphic',
  slug: 'graphic-template',
  draft: true,
  kind: 'Graphic & illustration',
  year: '[YEAR]',
  heroPh: 'Hero shot: the piece in context (wall, hand, table)',
  title: { a: '[Project ', b: 'name.]' },
  facts: [{ k: 'CLIENT', v: '[client]' }, { k: 'WHAT', v: '[poster · identity · cards]' }, { k: 'MY ROLE', v: '[concept, illustration, layout]' }, { k: 'PRINT', v: '[A1 · 350 g · 2 colours]' }],
  pieces: [
    { t: '[Piece 1]', m: '[FORMAT]', span: 2, ar: '16/10', ph: 'Main piece, flat' },
    { t: '[Piece 2]', m: '[FORMAT]', span: 1, ar: '4/5', ph: 'Detail' },
    { t: '[Piece 3]', m: '[FORMAT]', span: 1, ar: '4/5', ph: 'Back side' },
    { t: '[Piece 4]', m: '[FORMAT]', span: 1, ar: '1/1', ph: 'Close-up' },
    { t: '[Piece 5]', m: '[FORMAT]', span: 1, ar: '1/1', ph: 'In context' }
  ],
  palette: [{ c: 'rgb(24,29,40)', fl: 3 }, { c: 'rgb(15,20,154)', fl: 2 }, { c: 'rgb(255,209,190)', fl: 2 }, { c: 'rgb(236,146,60)', fl: 1 }, { c: '#fff', fl: 1 }],
  paletteDraft: true,
  typeface: '[Typeface name]',
  formats: ['[A1 POSTER]', '[85 × 55 MM CARD]', '[INSTAGRAM 4:5]'],
  steps: [{ t: 'Sketch', ph: 'Pencil sketch' }, { t: 'Vector', ph: 'Vector draft' }, { t: 'Colour', ph: 'Colour tests' }, { t: 'Print', ph: 'Printed proof' }],
  next: { href: '/works?section=graphic', cat: 'GRAPHIC & ILLUSTRATION', name: '[Next project]', img: '/assets/work/17.jpg' }
} satisfies GraphicCase;
