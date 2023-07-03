import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries, selectCountries } from '../store/countriesSlice';
import Header from './Header';
import CountryItem from './CountryItem';

function Home() {
  const dispatch = useDispatch();
  const countries = useSelector(selectCountries);

  useEffect(() => {
    if (!countries || countries.length === 0) {
      dispatch(fetchCountries());
    }
  }, [dispatch, countries]);

  const memoizedCountries = useMemo(() => countries, [countries]);

  return (
    <div>
      <Header title="Companies per Countries" showBackButton={false} />
      <div id="content" className="grid grid-cols-2">
        {memoizedCountries && memoizedCountries.map((country) => (
          <CountryItem key={country.name} country={country} />
        ))}
      </div>
    </div>
  );
}

export default Home;
