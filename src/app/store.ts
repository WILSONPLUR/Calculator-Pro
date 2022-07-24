import { configureStore } from "@reduxjs/toolkit";
import calculatorReducer from "./features/calculator/calcSlice";
import {useDispatch} from "react-redux";

const store = configureStore({
  reducer: calculatorReducer,
});


export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch();

export default store;
