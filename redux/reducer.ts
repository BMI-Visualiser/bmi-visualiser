import { combineReducers } from '@reduxjs/toolkit';
import example from './slices/example';

const reducer = combineReducers({
    example: example.reducer,
})

export type State = ReturnType<typeof reducer>;

export default reducer;