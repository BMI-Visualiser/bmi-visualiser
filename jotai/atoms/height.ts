import { atom } from 'jotai'

export type Type = number

export const getDefaultValue: () => Type = () => 160

const heightAtom = atom<Type>(getDefaultValue())

export default heightAtom
