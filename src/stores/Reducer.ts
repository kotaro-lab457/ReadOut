import { combineReducers } from "@reduxjs/toolkit";

// 後ほど作成するReducerに値が入る...
const userReducer = combineReducers({});

// stateの型指定する時に使う
export type RootState = ReturnType<typeof userReducer>;

export default userReducer;
