import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { countriesCode } from './countryCode.jsx';
import { findBestMatch } from 'string-similarity';

const countryMap = new Map();

countriesCode.forEach((item) => {
  countryMap.set(item.Country.toLowerCase(), item['ISO Code']);
});

export const getISOCode = (country) => {
  let foundCountry = countryMap.get(country.toLowerCase());

  if (!foundCountry) {
    const countryNames = Array.from(countryMap.keys());
    const bestMatch = findBestMatch(country, countryNames).bestMatch;
    foundCountry = countryMap.get(bestMatch.target);
  }

  return foundCountry ?? '';
};

export const getImagePath = (isoCode) => {
  // Retorne o caminho relativo para a imagem apropriada
  const imagePath = `/images/${isoCode.toLowerCase()}/vector.svg`;
  return imagePath;
};

export const CountryItem = ({ country }) => {
  const [folderExists, setFolderExists] = useState(false);
  const { name, companyCount } = country;
  const isoCode = getISOCode(name);
  const imagePath = getImagePath(isoCode);

  // Remove text between parentheses and trim whitespace
  const displayName = name; //;

  useEffect(() => {
    // Check if folder exists
    fetch(`/images/${isoCode.toLowerCase()}`, { method: 'HEAD' })
      .then((res) => {
        if (res.ok) {
          setFolderExists(true);
        }
      })
      .catch((err) => console.error(err));
  }, [isoCode]);

  if (folderExists) {
    return (
      <Link
        to={{
          pathname: `/details/${displayName}`,
          state: { imagePath },
        }}
        className="w-full h-48 relative country-item pt-2"
      >
        <div className="w-full absolute h-2/3 bg-center bg-contain bg-no-repeat" style={{ backgroundImage: `url(${imagePath})` }} />
        {/* Adicione um contêiner ao redor da segunda <div> */}
        <div className="absolute bottom-0 right-2 flex justify-end items-end">
          <div className="flex flex-col items-end">
            <h2 className="text-md font-bold text-right text-white mb-2">{displayName.toUpperCase().replace(/\s*\([^)]*\)/g, '').trim()}</h2>
            <p className="text-white">{companyCount}</p>
          </div>
        </div>
      </Link>
    );
  }

  return null;
};

export default CountryItem;
