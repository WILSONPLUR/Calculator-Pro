/* eslint-disable no-unused-expressions */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface CalcState {
  nums: number[],
  actions: string[],
  additionalActions: string[],
  result: number | string;
}

const initialState: CalcState = {
  nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].reverse(),
  actions: ["=", "+", "*", "-", "/"].reverse(),
  additionalActions: ["AC", "%", "<"],
  result: 0,
}

const calculatorReducer = createSlice({
  initialState: initialState,
  name: "calculator",
  reducers: {
    addNum: (state: CalcState, { payload }: PayloadAction<number>) => {
      if (state.result === 0) {
        state.result += payload;
      } else {
        state.result += String(payload);
      }
    },
    addAction: (state:CalcState, { payload }: PayloadAction<string>) => {
      switch (payload) {
        case "+":
          state.result += payload;
          break;

        case "-":
          state.result += payload;
          break;
        case "<":
          if(typeof state.result === "string") state.result = state.result.substring(0, state.result.length - 1);
          break;
        case "AC":
          state.result = "";
          break;
        case "=":
          if(typeof state.result === "string") state.result = Number(eval(state.result));
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
