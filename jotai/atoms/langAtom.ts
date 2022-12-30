import { atom, useAtomValue } from 'jotai'

export type Type = Record<Key, Value>

export type Key =
  'weightKg' |
  'heightCm' |
  'bmi' |
  'yourBmi' |
  'underweight' |
  'normal' |
  'overweight' |
  'classOneObesity' |
  'classTwoObesity' |
  'classThreeObesity'

export type Value = string

export const en: () => Type = () => ({
  weightKg: 'Weight (kg)',
  heightCm: 'Height (cm)',
  bmi: 'BMI',
  yourBmi: 'Your BMI',
  underweight: 'Underweight',
  normal: 'Normal',
  overweight: 'Overweight',
  classOneObesity: 'Class 1 Obesity',
  classTwoObesity: 'Class 2 Obesity',
  classThreeObesity: 'Class 3 Obesity',
})

export const getDefaultValue: () => Type = en

const langAtom = atom<Type>(getDefaultValue())

export const useLang: () => Type = () => useAtomValue(langAtom)

export default langAtom
