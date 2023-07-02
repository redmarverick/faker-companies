import '@testing-library/jest-dom';
import { getImagePath } from '../components/CountryItem';

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
