import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Octokit } from "@octokit/core";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

const initialState = {
  issues: null,
  status: null,
  currentPage: 1,
  startPage: 1,
  endPage: 10,
};

export const asyncIssues = createAsyncThunk(
  "issuesList/asyncFetch",
  async () => {
    const owner = "angular";
    const repo = "angular-cli";
    const response = await octokit.request(
      "GET /repos/angular/angular-cli/issues",
      {
        owner: owner,
        repo: repo,
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      }
    );
    const data = response.data;
    return data;
  }
);

export const issuesSlice = createSlice({
  name: "issues",
  initialState,
  reducers: {
    getIssues: (state, action) => {
      state.issues = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setStartPage: (state, action) => {
      state.startPage = action.payload;
    },
    setEndPage: (state, action) => {
      state.endPage = action.payload;
    },
  },
  // ---------------------------------

  extraReducers: (builder) => {
    builder.addCase(asyncIssues.pending, (state, action) => {
      state.status = "Loading";
    });
    builder.addCase(asyncIssues.fulfilled, (state, action) => {
      state.issues = action.payload;
    });
    builder.addCase(asyncIssues.rejected, (state, action) => {
      state.status = "Fail";
    });
  },
});

export const { getIssues, setCurrentPage, setStartPage, setEndPage } =
  issuesSlice.actions;
