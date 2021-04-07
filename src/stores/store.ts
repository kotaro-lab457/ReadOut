import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./Reducer";

//rootReducerの登録
const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;

export default store;
