import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  totalCount: 0,
  repoList: [],
  incomplete_results: false,
  state: "idle",
};

export const fetchRepoData = createAsyncThunk(
  "repository/fetchData",
  async ({
    searchType,
    searchValue,
    sortBy,
    orderBy,
    pageNumber,
    pageSize,
  }) => {
    const response = await axios.get(
      "https://api.github.com/search/repositories?",
      {
        params: {
          q: `${searchType}:${searchValue}`,
          sort: sortBy,
          order: orderBy,
          page: pageNumber,
          per_page: pageSize,
        },
      }
    );
    return response.data;
  }
);

export const repoDataSlice = createSlice({
  name: "repository",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRepoData.pending, (state) => {
        state.state = "loading";
      })
      .addCase(fetchRepoData.fulfilled, (state, action) => {
        state.state = "idle";
        state.totalCount = action.payload.total_count;
        state.repoList = action.payload.items;
        state.incompleteResults = action.payload.incomplete_results;
      })
      .addCase(fetchRepoData.rejected, (state, action) => {
        state.state = "idle";
        state.totalCount = 0;
        state.repoList = [];
        state.incompleteResults = false;
      });
  },
});

export const selectRepoData = (state) => state;

export default repoDataSlice.reducer;