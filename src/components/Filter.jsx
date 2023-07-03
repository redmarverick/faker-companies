import React, { useState } from 'react';
import Filter from './Filter';

function App() {
  const [filterValue, setFilterValue] = useState('');

  const handleFilterChange = (value) => {
    setFilterValue(value);
  };

  return (
    <div>
      <h1>My App</h1>
      <Filter onFilterChange={handleFilterChange} />
    </div>
  );
}

export default App;
