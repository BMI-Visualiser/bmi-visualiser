import weightAtom from '@jotai/atoms/weightAtom'
import heightAtom from '@jotai/atoms/heightAtom'
import { useAtomValue } from 'jotai'
import calculateBmi from '@utils/calculateBmi'

export default function useBmi () {
  const weight = useAtomValue(weightAtom)
  const height = useAtomValue(heightAtom)
  return calculateBmi(weight, height)
}
