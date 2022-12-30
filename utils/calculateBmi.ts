import { Bmi, Height, Weight } from "@customTypes"

export default function calculateBmi (weight: Weight, height: Height): Bmi {
  const heightM = height / 100
  return weight / (heightM * heightM)
}
