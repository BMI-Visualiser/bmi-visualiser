import Grid from '@mui/material/Grid'
import { useValue as useProfileValue, actionCreators as profileActionCreators } from '@redux/slices/main/profile'
import TextField, { TextFieldProps } from '@mui/material/TextField'
import { useDispatch } from 'react-redux'
import { useCallback } from 'react'

const lang = {
  weightKg: 'Weight (kg)',
  weightLb: 'Weight (lbs)',
  heightCm: 'Height (cm)',
  heightFt: 'Feet',
  heightIn: 'Inch',
}

export default function BodyForm() {
  const {
    weightKg,
    heightCm,
  } = useProfileValue()
  const dispatch = useDispatch();

  const onWeightKgTextFieldChange = useCallback<NonNullable<TextFieldProps['onChange']>>((event) => { dispatch(profileActionCreators.setWeightKg(event.target.value)); }, [dispatch])
  const onHeightCmTextFieldChange = useCallback<NonNullable<TextFieldProps['onChange']>>((event) => { dispatch(profileActionCreators.setHeightCm(event.target.value)); }, [dispatch])

  return (
    <form>
      <Grid container spacing={2}>
        <Grid item sm={4}>
          <TextField
            type="number"
            name="weightKg"
            label={lang.weightKg}
            value={weightKg}
            onChange={onWeightKgTextFieldChange}
          />
        </Grid>
        <Grid item sm={4}>
          <TextField
            type="number"
            name="heightCm"
            label={lang.heightCm}
            value={heightCm}
            onChange={onHeightCmTextFieldChange}
          />
        </Grid>
        <Grid item sm={4}>
          <TextField
            type="number"
            name="weightKg"
            label={lang.weightKg}
            value={weightKg}
            disabled
          />
        </Grid>
      </Grid>
    </form>
  )
}
