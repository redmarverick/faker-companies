import { getImagePath } from '../components/CountryItem';
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Details from '../components/Details';
import { fetchCompaniesByCountry, selectCompanies } from '../store/companiesSlice';

// Tests that the correct image path is returned based on ISO code
it('test_return_image_path_based_on_ISO_code', () => {
  const isoCode = 'us';
  const imagePath = getImagePath(isoCode);
  expect(imagePath).toBe('/images/us/vector.svg');
});

it('test_country_name_is_trimmed', () => {
  const country = 'USA (United States of America)';
  const displayName = country.toUpperCase().replace(/\s*\([^)]*\)/g, '').trim();
  expect(displayName).toBe('USA');
});

jest.mock('../components/Header', () => () => <div>USA Companies</div>);

jest.mock('react-router-dom', () => ({
  useParams: jest.fn(),
}));

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock('../store/companiesSlice', () => ({
  fetchCompaniesByCountry: jest.fn(),
  selectCompanies: jest.fn(),
}));

describe('Details', () => {
  beforeEach(() => {
    useParams.mockReset();
    useDispatch.mockReset();
    useSelector.mockReset();
    fetchCompaniesByCountry.mockClear();
    selectCompanies.mockClear();
  });

  it('should render details page with header', () => {
    useParams.mockReturnValue({ country: 'USA' });
    useDispatch.mockReturnValue(jest.fn());
    useSelector.mockReturnValue([]);

    render(<Details />);

    expect(screen.getByText('USA Companies')).toBeInTheDocument();
  });

  it('should fetch companies by country on mount', () => {
    useParams.mockReturnValue({ country: 'Canada' });
    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);
    useSelector.mockReturnValue([]);

    render(<Details />);

    expect(dispatch).toHaveBeenCalledWith(fetchCompaniesByCountry('Canada'));
  });

  it('should display no companies message when companies array is empty', () => {
    useParams.mockReturnValue({ country: 'Germany' });
    useDispatch.mockReturnValue(jest.fn());
    useSelector.mockReturnValue([]);

    render(<Details />);

    expect(screen.getByText('No companies in Germany')).toBeInTheDocument();
  });

  it('should display companies', () => {
    useParams.mockReturnValue({ country: 'USA' });
    useDispatch.mockReturnValue(jest.fn());
    useSelector.mockReturnValue([
      { id: 1, name: 'Company 1' },
      { id: 2, name: 'Company 2' },
      { id: 3, name: 'Company 3' },
    ]);

    render(<Details />);

    expect(screen.getByText('Company 1')).toBeInTheDocument();
    expect(screen.getByText('Company 2')).toBeInTheDocument();
    expect(screen.getByText('Company 3')).toBeInTheDocument();
  });
});