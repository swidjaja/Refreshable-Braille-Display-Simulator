/**
 * We will use the config to match the actual Braile dots
 * left hand:
 * idx 0 - dot 1
 * idx 1 - dot 2
 * idx 2 - dot 3
 * idx 3 - dot 7
 * right hand
 * idx 4 - dot 4
 * idx 5 - dot 5
 * idx 6 - dot 6
 * idx 7 - dot 8
 */
const uncontractedBrailleChars = {
  a: [true, false, false, false, false, false, false, false],
  b: [true, true, false, false, false, false, false, false],
  c: [true, false, false, false, true, false, false, false],
  d: [true, false, false, false, true, true, false, false],
  e: [true, false, false, false, false, true, false, false],
  f: [true, true, false, false, true, false, false, false],
  g: [true, true, false, false, true, true, false, false],
  h: [true, true, false, false, false, true, false, false],
  i: [false, true, false, false, true, false, false, false],
  j: [false, true, false, false, true, true, false, false],
  k: [true, false, true, false, false, false, false, false],
  l: [true, true, true, false, false, false, false, false],
  m: [true, false, true, false, true, false, false, false],
  n: [true, false, true, false, true, true, false, false],
  o: [true, false, true, false, false, true, false, false],
  p: [true, true, true, false, true, false, false, false],
  q: [true, true, true, false, true, true, false, false],
  r: [true, true, true, false, false, true, false, false],
  s: [false, true, true, false, true, false, false, false],
  t: [false, true, true, false, true, true, false, false],
  u: [true, false, true, false, false, false, true, false],
  v: [true, true, true, false, false, false, true, false],
  w: [false, true, false, false, true, true, true, false],
  x: [true, false, true, false, true, false, true, false],
  y: [true, false, true, false, true, true, true, false],
  z: [true, false, true, false, false, true, true, false],
  0: [false, true, false, false, true, true, false, false],
  1: [true, false, false, false, false, false, false, false],
  2: [true, true, false, false, false, false, false, false],
  3: [true, false, false, false, true, false, false, false],
  4: [true, false, false, false, true, true, false, false],
  5: [true, false, false, false, false, true, false, false],
  6: [true, true, false, false, true, false, false, false],
  7: [true, true, false, false, true, true, false, false],
  8: [true, true, false, false, false, true, false, false],
  9: [false, true, false, false, true, false, false, false],
  ' ': [false, false, false, false, false, false, false, false],
  '.': [false, true,  false, false, false, true, true, false],
  ',': [false, true, false, false, false, false, false, false],
  "'": [false, false, true, false, false, false, false, false],
};

export const emptyCell = [false, false, false, false, false, false, false, false];

export default uncontractedBrailleChars;
