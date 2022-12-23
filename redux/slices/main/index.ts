import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit'
import * as profile from './profile';

// Define the initial state using that type
export type State = {
  profile: profile.State,
}

export type Reducer = SliceCaseReducers<State>

const main = createSlice({
  name: 'main',
  initialState: {
    profile: profile.initialState,
  },
  reducers: {
    profile: profile.reducer
  }
})

export default main
