import { combineReducers } from "@reduxjs/toolkit";

// 後ほど作成するReducerに値が入る...
const rootReducer = combineReducers({});

// stateの型指定する時に使う
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
