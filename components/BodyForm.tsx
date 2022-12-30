import weightAtom from '@jotai/atoms/weightAtom'
import heightAtom from '@jotai/atoms/heightAtom'
import Grid from '@mui/material/Grid'
import TextField, { TextFieldProps } from '@mui/material/TextField'
import { useAtom } from 'jotai'
import { useCallback } from 'react'
import { useLang } from '@jotai/atoms/langAtom'
import calculateBmi from '@utils/calculateBmi'
import { SystemStyleObject, Theme } from '@mui/system'
import Box from '@mui/material/Box'

export default function BodyForm() {
  const [weight, setWeight] = useAtom(weightAtom)
  const [height, setHeight] = useAtom(heightAtom)
  const lang = useLang();

  const onWeightKgTextFieldChange = useCallback<NonNullable<TextFieldProps['onChange']>>((event) => { setWeight(parseInt(event.target.value)) }, [setWeight])
  const onHeightCmTextFieldChange = useCallback<NonNullable<TextFieldProps['onChange']>>((event) => { setHeight(parseInt(event.target.value)) }, [setHeight])

  const bmi = calculateBmi(weight, height)

  return (
    <Box component="form" sx={RootStyle}>
      <Grid container spacing={2}>
        <Grid item sm={4}>
          <TextField
            type="number"
            name="weightKg"
            label={lang.weightKg}
            value={weight}
            onChange={onWeightKgTextFieldChange}
          />
        </Grid>
        <Grid item sm={4}>
          <TextField
            type="number"
            name="heightCm"
            label={lang.heightCm}
            value={height}
            onChange={onHeightCmTextFieldChange}
          />
        </Grid>
        <Grid item sm={4}>
          <TextField
            type="number"
            name="bmi"
            label={lang.yourBmi}
            value={bmi}
            inputProps={{ readOnly: true }}
          />
        </Grid>
      </Grid>
    </Box>
  )
}

const RootStyle: SystemStyleObject<Theme> = {
  mb: 2,
}
