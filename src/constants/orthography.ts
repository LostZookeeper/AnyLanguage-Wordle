import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'q',
  'w',
  'e',
  'r',
  't',
  'z',
  'u',
  'i',
  'o',
  'p',
  'a',
  's',
  'd',
  'f',
  'g',
  'h',
  'j',
  'k',
/*  'l', */
  'y',
  'x',
  'c',
  'v',
  'b',
  'n',
  'm',
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
