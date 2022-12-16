import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import FormHelperText from '@mui/material/FormHelperText';
import { ChangeEventHandler, useCallback, useEffect, useState } from 'react';

const lang = {
  weightKg: 'Weight (kg)',
  weightLb: 'Weight (lbs)',
  heightCm: 'Height (cm)',
  heightFt: 'Feet',
  heightIn: 'Inch',
};

type WeightKg = number;
type HeightCm = number;

const defaultWeightKg = 60;
const defaultHeightCm = 160;

export interface Props {
  onChange: (weightKg: WeightKg, heightCm: HeightCm) => void
}

export default function BodyForm(props: Props) {
  const { onChange } = props;
  const [weightKg, setWeightKg] = useState<WeightKg>(defaultWeightKg);
  const [heightCm, setHeightCm] = useState<HeightCm>(defaultHeightCm);

  const onWeightKgInputChange = useCallback<ChangeEventHandler<HTMLInputElement>>(event => { setWeightKg(parseInt(event.target.value) || 0); }, [setWeightKg]);
  const onHeightCmInputChange = useCallback<ChangeEventHandler<HTMLInputElement>>(event => { setHeightCm(parseInt(event.target.value) || 0); }, [setHeightCm]);

  useEffect(() => {
    onChange(weightKg, heightCm);
  }, [onChange, weightKg, heightCm]);

  return (
    <Grid container spacing={2}>
      <Grid item sm={6}>
        <FormControl fullWidth>
          <InputLabel htmlFor="weight">{lang.weightKg}</InputLabel>
          <Input
            type="number"
            name="weight"
            value={weightKg}
            onChange={onWeightKgInputChange}
          />
        </FormControl>
      </Grid>
      <Grid item sm={6}>
        <FormControl fullWidth>
          <InputLabel htmlFor="height">{lang.heightCm}</InputLabel>
          <Input
            type="number"
            name="height"
            value={heightCm}
            onChange={onHeightCmInputChange}
          />
        </FormControl>
      </Grid>
    </Grid>
  )
}
