import { configureStore } from "@reduxjs/toolkit";
import calculatorReducer from "./features/calculator/calcSlice";

export default configureStore({
  reducer: calculatorReducer,
});
