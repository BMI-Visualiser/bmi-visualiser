import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { EqualityFn, shallowEqual } from 'react-redux'

export type WeightKg = number;
export type WeightLb = number;
export type HeightCm = number;
export type HeightFt = number;
export type HeightIn = number;

type WeightKgState = { weightKg: WeightKg, weightLb?: never }
type WeightLbState = { weightKg?: never, weightLb: WeightLb }
type HeightCmState = { heightCm: HeightCm, heightFt?: never, heightIn?: never }
type HeightFtInState = { heightCm?: never, heightFt: HeightFt, heightIn: HeightIn }

type KgCmState = WeightKgState & HeightCmState
type KgFtInState = WeightKgState & HeightFtInState
type LbCmState = WeightLbState & HeightCmState
type LbFtInState = WeightLbState & HeightFtInState

export type Value = KgCmState | KgFtInState | LbCmState | LbFtInState
export interface State { value: Value }

const defaultWeightKg = 60;
const defaultHeightCm = 160;

// Define the initial state using that type
const value: Value = { weightKg: defaultWeightKg, heightCm: defaultHeightCm }
const initialState: State = { value }

const example = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<Value>) => {
      state.value = action.payload;
    },
  }
})

export const equalityFunction: EqualityFn<State> = shallowEqual

export default example
