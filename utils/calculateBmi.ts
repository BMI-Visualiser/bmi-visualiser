import { Bmi, Height, Weight } from "@customTypes"

export default function calculateBmi (weight: Weight, height: Height): Bmi {
  const heightM = height / 100
  const bmiUnrounded = weight / (heightM * heightM)
  const bmi = Math.round(bmiUnrounded * 100) / 100
  return bmi
}
