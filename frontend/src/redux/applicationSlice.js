import { createSlice } from "@reduxjs/toolkit";

const applicationSlice = createSlice({
  name: 'application',
  initialState: {
    applicants: [],
    loading: false,
    error: null,
  },
  reducers: {
    setAllApplicants: (state, action) => {
      state.applicants = action.payload;
      state.loading = false;
    },
    setLoading: (state) => {
      state.loading = true;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    clearApplicants: (state) => {
      state.applicants = [];
    }
  }
});

export const { setAllApplicants, setLoading, setError, clearApplicants } = applicationSlice.actions;
export default applicationSlice.reducer;
