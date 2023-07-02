import React, { useState } from 'react';

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
