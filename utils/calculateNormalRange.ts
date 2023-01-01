import config from "@config"
import { Height, Weight } from "@customTypes"
import calculateWeightByBmi from "./calculateWeightByBmi"

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
  return [
    calculateWeightByBmi(underweightMax, height),
    calculateWeightByBmi(normalWeightMax, height),
  ]
}
