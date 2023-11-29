import React, { useState } from 'react';

const Filter = ({ onFilterChange }) => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilterChange = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions, option => option.value);
    setSelectedFilters(selectedOptions);
    onFilterChange(selectedOptions); 
  };

  return (
    <div className="filter">
      {/* Filter options */}
      <select multiple onChange={handleFilterChange}>
        <option value="categoryA">Category A</option>
        <option value="categoryB">Category B</option>
        {/* Other filter options */}
      </select>
    </div>
  );
};

export default Filter;
