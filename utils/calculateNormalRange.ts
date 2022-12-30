import config from "@config"
import { Height, Weight } from "@customTypes"
import roundDecimal from "./roundDecimal"


export type ReturnValue = [Weight, Weight]

const {
  underweightMax,
  normalWeightMax,
} = config

/**
 * For [Weight in Kilogram] / ([Height in meter] ^ 2) = BMI, we can have:
 * [Max BMI] * ([Height in meter] ^ 2) = [Max Weight in Kilogram]; And
 * [Min BMI] * ([Height in meter] ^ 2) = [Min Weight in Kilogram]
 *
 */
export default function calculateNormalRange (height: Height): ReturnValue {
  const heightM = (height / 100)
  const heightMSquare = heightM * heightM
  const min = roundDecimal(underweightMax * heightMSquare)
  const max = roundDecimal(normalWeightMax * heightMSquare)
  return [min, max]
}
