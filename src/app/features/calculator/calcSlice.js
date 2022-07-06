/* eslint-disable no-unused-expressions */
import { createSlice } from "@reduxjs/toolkit";

const calculatorReducer = createSlice({
  initialState: {
    nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].reverse(),
    actions: ["=", "+", "*", "-", "/"].reverse(),
    additionalActions: ["AC", "%", "<"],
    result: 0,
  },
  name: "calculator",
  reducers: {
    addNum: (state, { payload }) => {
      if (state.result === 0) {
        state.result += payload;
      } else {
        state.result += String(payload);
      }
    },
    addAction: (state, { payload }) => {
      switch (payload) {
        case "+":
          state.result += payload;
          break;

        case "-":
          state.result += payload;
          break;
        case "<":
          state.result = state.result.substring(0, state.result.length - 1);
          break;
        case "AC":
          state.result = "";
          break;
        case "=":
          state.result = Number(eval(state.result));
          break;
        // case "<":
        //   state.result = 0;
        //   break;
        // eslint-disable-next-line no-fallthrough
        default:
          state.result += payload;
          break;
      }
    },
  },
});

export const { addNum, addAction } = calculatorReducer.actions;
export default calculatorReducer.reducer;
