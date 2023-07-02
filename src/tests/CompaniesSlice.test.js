import '@testing-library/jest-dom';
import { configureStore } from '@reduxjs/toolkit';
import companiesReducer, {
  selectCompanies,
  selectLoading,
} from '../store/companiesSlice';

jest.mock('axios');

describe('CompaniesSlice', () => {
  beforeEach(() => {
    configureStore({
      reducer: {
        companies: companiesReducer,
      },
    });
  });

  describe('selectCompanies', () => {
    it('should select the companies from the store', () => {
      const state = {
        companies: {
          companies: [{ name: 'Company A' }, { name: 'Company B' }],
          loading: false,
        },
      };

      const selectedCompanies = selectCompanies(state);

      expect(selectedCompanies).toEqual([{ name: 'Company A' }, { name: 'Company B' }]);
    });
  });

  describe('selectLoading', () => {
    it('should select the loading state from the store', () => {
      const state = {
        companies: {
          companies: [],
          loading: true,
        },
      };

      const isLoading = selectLoading(state);

      expect(isLoading).toBe(true);
    });
  });
});
