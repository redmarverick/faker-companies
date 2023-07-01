import React from 'react';

function Filter({ onFilterChange }) {
  const handleFilterChange = (event) => {
    onFilterChange(event.target.value);
  };

  return (
    <div>
      <input type="text" placeholder="Filter by category name" onChange={handleFilterChange} />
    </div>
  );
}

export default Filter;
