import { combineReducers } from "@reduxjs/toolkit";
import { issuesSlice } from "./issues";

export const rootReducer = combineReducers({ issues: issuesSlice.reducer });
