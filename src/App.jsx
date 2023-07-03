import './App.css';
import 'tailwindcss/tailwind.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:country" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
