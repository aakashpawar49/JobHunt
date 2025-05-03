import { createSlice } from "@reduxjs/toolkit";

const companySlice = createSlice({
  name: "company",
  initialState: {
    loading: false,
    error: null,
    singleCompany: null,
    companies: [],
    searchCompanyByText: "",
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    setSingleCompany: (state, action) => {
      state.singleCompany = action.payload;
    },
    setCompanies: (state, action) => {
      state.companies = action.payload;
    },
    setSearchCompanyByText: (state, action) => {
      state.searchCompanyByText = action.payload;
    },
    clearCompanyData: (state) => {
      state.singleCompany = null;
      state.companies = [];
      state.searchCompanyByText = "";
      state.loading = false;
      state.error = null;
    },
  },
});

export const { 
  setLoading, 
  setError, 
  setSingleCompany, 
  setCompanies, 
  setSearchCompanyByText, 
  clearCompanyData 
} = companySlice.actions;

export default companySlice.reducer;
