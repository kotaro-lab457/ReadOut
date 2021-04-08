import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Reducer";

//rootReducerの登録
const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export default store;
