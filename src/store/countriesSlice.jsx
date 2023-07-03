import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  countries: [],
  loading: false,
};

export const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    setCountries: (state, action) => {
      state.countries = action.payload;
      state.loading = false;
    },
    setLoading: (state) => {
      state.loading = true;
    },
  },
});

export const { setCountries, setLoading } = countriesSlice.actions;

export const fetchCountries = () => async (dispatch) => {
  try {
    dispatch(setLoading()); // Set loading state to true

    const response = await axios.get(
      `https://fakerapi.it/api/v1/companies?_quantity=200&_seed=42069`
    );
    const data = response.data.data;

    const countryCounts = data.reduce((acc, company) => {
      const country = company.country;
      acc[country] = (acc[country] || 0) + 1;
      return acc;
    }, {});

    const countries = Object.entries(countryCounts).map(([name, companyCount]) => ({
      name,
      companyCount,
    }));

    // Sort the countries alphabetically by name
    countries.sort((a, b) => a.name.localeCompare(b.name));

    dispatch(setCountries(countries));
  } catch (error) {
    dispatch(setLoading()); // Reset loading state to false in case of an error
  }
};

export const selectCountries = (state) => state.countries.countries;
export const selectLoading = (state) => state.countries.loading;

export default countriesSlice.reducer;
