import { createSlice } from "@reduxjs/toolkit";
import fetchIssues from "../fetchIssues/fetchIssues";

const initialState = {
  issues: null,
};

export const issuesSlice = createSlice({
  name: "issues",
  initialState,
  reducers: {
    getIssues: (state, action) => {
      state.issues = action.payload;
    },
  },
});

export const { getIssues } = issuesSlice.actions;

export const fetchIssuesAsync = () => async (dispatch) => {
  try {
    const issues = await fetchIssues();
    dispatch(getIssues(issues));
  } catch (error) {
    console.error("GitHub API 요청 오류:", error.message);
  }
};

export default issuesSlice.reducer;
