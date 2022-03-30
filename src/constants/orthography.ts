import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'Q',
  'W',
  'E',
  'R',
  'T',
  'Z',
  'U',
  'I',
  'O',
  'P',
  'A',
  'S',
  'D',
  'F',
  'G',
  'H',
  'J',
  'K',
  'L',
  'Y',
  'X',
  'C',
  'V',
  'B',
  'N',
  'M',
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
