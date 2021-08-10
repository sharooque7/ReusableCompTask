import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  arr: [],
};
const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    Add(state, action) {
      let val = action.payload;
      state.arr.length = 0;
      state.arr.push(...val);
    },
    getData(state, action) {
      return state.arr;
    },
  },
});
const store = configureStore({
  reducer: { counter: counterSlice.reducer },
});
export const CounterActions = counterSlice.actions;
export default store;
