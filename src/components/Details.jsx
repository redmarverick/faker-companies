import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCompaniesByCountry, selectCompanies } from '../store/companiesSlice';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header';
import { countriesCode } from './countryCode.jsx';
import { getISOCode, getImagePath } from './CountryItem.jsx';
import { findBestMatch } from 'string-similarity';

const countryMap = new Map();

countriesCode.forEach((item) => {
  countryMap.set(item.Country.toLowerCase(), item['ISO Code']);
});

function Details() {
  const { country } = useParams();
  const dispatch = useDispatch();
  const companies = useSelector(selectCompanies);

  // Get image source using getISOCode and getImagePath functions
  const isoCode = getISOCode(country);
  const imagePath = getImagePath(isoCode);

  // Remove text between parentheses and trim whitespace
  const displayName = country.replace(/\s*\([^)]*\)/g, '').trim();

  useEffect(() => {
    dispatch(fetchCompaniesByCountry(country));
  }, [country, dispatch]);

  return (
    <div>
      <Header title={`${displayName} Companies`} showBackButton={true} />
      <div className="flex h-2/3 justify-around items-center bg-light-pink">
        <div className="w-36 p-2">
          {/* Display image using imagePath */}
          <img className="h-3/4" src={imagePath} alt={displayName} />
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <h2 className="text-lg font-bold text-right text-white mb-2">{displayName.toUpperCase()}</h2>
        </div>
      </div>
      <table className="w-full">
        <tbody>
          {companies.length === 0 ? (
            <tr>
              <td>No companies in {displayName}</td>
            </tr>
          ) : (
            companies.map((company) => (
              <tr key={company.id} className="h-20 companies ">
                <td className="align-middle p-2 text-white">{company.name}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Details;
