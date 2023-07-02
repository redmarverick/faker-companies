import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  companies: [],
  loading: false,
};

export const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    setCompanies: (state, action) => {
      state.companies = action.payload;
      state.loading = false;
    },
    setLoading: (state) => {
      state.loading = true;
    },
  },
});

export const { setCompanies, setLoading } = companiesSlice.actions;

export const fetchCompaniesByCountry = (country) => async (dispatch) => {
  try {
    dispatch(setLoading()); // Set loading state to true

    const response = await axios.get(`https://fakerapi.it/api/v1/companies?_quantity=200&_seed=42069`);
    const data = response.data.data;

    const countryCompanies = data.reduce((acc, company) => {
      const country = company.country;
      acc[country] = [...(acc[country] || []), company];
      return acc;
    }, {});

    const companies = countryCompanies[country] || [];

    dispatch(setCompanies(companies));
  } catch (error) {
    console.log('Error fetching companies:', error);
    dispatch(setLoading()); // Reset loading state to false in case of an error
  }
};

export const selectCompanies = (state) => state.companies.companies;
export const selectLoading = (state) => state.companies.loading;

export default companiesSlice.reducer;
