import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Pass searchQuery to parent component
    onSearch(searchQuery);
  };

  return (
    <div className="search">
      <form onSubmit={handleSearchSubmit}>
        <input type="text" placeholder="Search products..." value={searchQuery} onChange={handleSearchChange} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;