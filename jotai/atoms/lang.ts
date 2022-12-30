import { atom, useAtomValue } from 'jotai'

export type Type = Record<Key, Value>

export type Key =
  'weightKg' | 'heightCm'

export type Value = string

export const en: () => Type = () => ({
  weightKg: 'Weight (kg)',
  heightCm: 'Height (cm)',
})

export const getDefaultValue: () => Type = en

const langAtom = atom<Type>(getDefaultValue())

export const useLang: () => Type = () => useAtomValue(langAtom)

export default langAtom
