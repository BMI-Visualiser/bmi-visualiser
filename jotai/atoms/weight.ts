import { atom } from 'jotai'

export type Type = number

export const getDefaultValue: () => Type = () => 60

const weightAtom = atom<Type>(getDefaultValue())

export default weightAtom
