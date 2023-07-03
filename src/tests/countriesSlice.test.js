import '@testing-library/jest-dom';
import { configureStore } from '@reduxjs/toolkit';
import countriesReducer, {
  selectCountries,
  selectLoading,
} from '../store/countriesSlice';

jest.mock('axios');

describe('CountriesSlice', () => {
  beforeEach(() => {
    configureStore({
      reducer: {
        countries: countriesReducer,
      },
    });
  });

  describe('selectCountries', () => {
    it('should select the countries from the store', () => {
      const state = {
        countries: {
          countries: [
            { name: 'USA', companyCount: 2 },
            { name: 'Canada', companyCount: 3 },
          ],
          loading: false,
        },
      };

      const selectedCountries = selectCountries(state);

      expect(selectedCountries).toEqual([
        { name: 'USA', companyCount: 2 },
        { name: 'Canada', companyCount: 3 },
      ]);
    });
  });

  describe('selectLoading', () => {
    it('should select the loading state from the store', () => {
      const state = {
        countries: {
          countries: [],
          loading: true,
        },
      };

      const isLoading = selectLoading(state);

      expect(isLoading).toBe(true);
    });
  });
});
