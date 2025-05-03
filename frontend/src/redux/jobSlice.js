import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "job",
  initialState: {
    loading: false,
    error: null,
    allJobs: [],
    allAdminJobs: [],
    singleJob: null,
    searchJobByText: "",
    allAppliedJobs: [],
    searchedQuery: "",
  },
  reducers: {
    // Set loading state
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    // Set error state
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    // Set job data
    setAllJobs: (state, action) => {
      state.allJobs = action.payload;
    },
    setSingleJob: (state, action) => {
      state.singleJob = action.payload;
    },
    setAllAdminJobs: (state, action) => {
      state.allAdminJobs = action.payload;
    },
    setSearchJobByText: (state, action) => {
      state.searchJobByText = action.payload;
    },
    setAllAppliedJobs: (state, action) => {
      state.allAppliedJobs = action.payload;
    },
    setSearchedQuery: (state, action) => {
      state.searchedQuery = action.payload;
    },
    // Clear job-related data
    clearJobData: (state) => {
      state.allJobs = [];
      state.allAdminJobs = [];
      state.singleJob = null;
      state.searchJobByText = "";
      state.allAppliedJobs = [];
      state.searchedQuery = "";
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  setLoading,
  setError,
  setAllJobs,
  setSingleJob,
  setAllAdminJobs,
  setSearchJobByText,
  setAllAppliedJobs,
  setSearchedQuery,
  clearJobData,
} = jobSlice.actions;

export default jobSlice.reducer;
