import { Bmi, Height, Weight } from "@customTypes";
import roundDecimal from "./roundDecimal";

export default function calculateWeightByBmi (bmi: Bmi, height: Height): Weight {
  const heightM = height / 100
  const heightMSquare = heightM * heightM
  return roundDecimal(bmi * heightMSquare)
}
