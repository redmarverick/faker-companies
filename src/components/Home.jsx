import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries, selectCountries } from '../store/countriesSlice';
import Header from './Header';
import CountryItem from './CountryItem';

function Home() {
  const dispatch = useDispatch();
  const countries = useSelector(selectCountries);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  return (
    <div>
      <Header title="Companies per Countries" showBackButton={false} />
      <div id="content" className="grid grid-cols-2">
      {countries.map((country) => (
        <CountryItem key={country.name} country={country} />
      ))}
      </div>
    </div>
  );
}

export default Home;
