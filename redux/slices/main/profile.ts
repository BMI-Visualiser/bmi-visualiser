import { useSelector } from "react-redux";

export type WeightKg = number
export type HeightCm = number

export type State = { weightKg: WeightKg, heightCm: HeightCm }

export const types = {
  setWeightKg: 'setWeightKg',
  setHeightCm: 'setHeightCm',
} as const

const defaultWeightKg = 60;
const defaultHeightCm = 160;

// Define the initial state using that type
export const initialState: State = {
  weightKg: defaultWeightKg,
  heightCm: defaultHeightCm,
}

export const reducer = (state: any, action: any) => {
  if (typeof action.payload === 'number') {
    if (action.type === 'setWeightKg') { return { weightKg: action.payload, heightCm: state?.heightCm ?? defaultHeightCm } }
    if (action.type === 'setHeightCm') { return { weightKg: state?.weightKg ?? defaultWeightKg, heightCm: action.payload } }
  }
  if (typeof state === 'undefined') { return { weightKg: defaultWeightKg, heightCm: defaultHeightCm } }
  return state
}

export const useValue: () => State = () => {
  const value = useSelector((state: any) => state.profile);
  return value as State;
}

export const actionCreators = {
  setWeightKg: (payload: number) => ({ type: 'setWeightKg', payload }),
  setHeightCm: (payload: number) => ({ type: 'setHeightCm', payload }),
};
