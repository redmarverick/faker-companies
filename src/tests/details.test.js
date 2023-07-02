import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { useParams } from 'react-router-dom';
import { getImagePath } from '../components/CountryItem';
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
