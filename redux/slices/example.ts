import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface State {
    value: number
}
  
  // Define the initial state using that type
const initialState: State = { value: 0 }

/**
 * @see https://redux.js.org/usage/usage-with-typescript#define-slice-state-and-action-types
 */
const example = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    }
  }
})

export default example
