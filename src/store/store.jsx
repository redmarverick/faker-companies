import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './countriesSlice';
import companiesReducer from './companiesSlice';

export default configureStore({
  reducer: {
    countries: countriesReducer,
    companies: companiesReducer,
  },
});
