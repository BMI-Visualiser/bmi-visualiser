import { Height } from '@customTypes'
import { atom } from 'jotai'

export type Type = Height

export const getDefaultValue: () => Type = () => 160

const heightAtom = atom<Type>(getDefaultValue())

export default heightAtom
