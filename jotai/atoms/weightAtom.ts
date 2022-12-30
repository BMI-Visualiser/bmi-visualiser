import { Weight } from '@customTypes'
import { atom } from 'jotai'

export type Type = Weight

export const getDefaultValue: () => Type = () => 60

const weightAtom = atom<Type>(getDefaultValue())

export default weightAtom
