import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    user: {},
    error: null,
    authenticated: false,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
      state.authenticated = true;
      state.loading = false;
    },
    clearUser: (state) => {
      state.user = {};
      state.authenticated = false;
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setLoading, setUser, clearUser, setError } = authSlice.actions;
export default authSlice.reducer;
