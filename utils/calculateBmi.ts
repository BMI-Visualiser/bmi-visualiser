import { Bmi, Height, Weight } from "@customTypes"
import roundDecimal from './roundDecimal';

export default function calculateBmi (weight: Weight, height: Height): Bmi {
  const heightM = height / 100
  const bmiUnrounded = weight / (heightM * heightM)
  return roundDecimal(bmiUnrounded)
}
