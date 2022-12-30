import heightAtom from "@jotai/atoms/heightAtom"
import Typography from "@mui/material/Typography"
import calculateNormalRange from "@utils/calculateNormalRange"
import { useAtomValue } from "jotai"

export default function NormalRange () {
  const height = useAtomValue(heightAtom)
  const [min, max] = calculateNormalRange(height)
  return (
    <Typography variant="h5" component="span">
      Your healthy weight range: {min}kg to {max}kg
    </Typography>
  )
}
