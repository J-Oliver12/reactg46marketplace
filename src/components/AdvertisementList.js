import React, { useState } from 'react';
import Advertisement from './Advertisement';

const AdvertisementList = ({ advertisements }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (event) => {
    setSearchText(event.target.value.toLowerCase());
  };

  const filteredAds = advertisements.filter(ad =>
    ad.title.toLowerCase().includes(searchText)
  );

  const chunkedAds = chunkArray(filteredAds, 3); 

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Advertisement List</h2>
      <div className="mb-3">
        <label htmlFor="filterTitle">Filter by Title:</label>
        <input
          type="text"
          className="form-control"
          id="filterTitle"
          placeholder="Enter title"
          value={searchText}
          onChange={handleSearch}
        />
      </div>
      {chunkedAds.map((group, index) => (
        <div className="row mb-4" key={index}>
          {group.map(ad => (
            <div className="col-md-4" key={ad.title}>
              <Advertisement
                title={ad.title}
                description={ad.description}
                image={ad.image}
                contact={ad.contact}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};


const chunkArray = (array, size) => {
  return array.reduce((chunks, item, index) => {
    const chunkIndex = Math.floor(index / size);

    if (!chunks[chunkIndex]) {
      chunks[chunkIndex] = [];
    }

    chunks[chunkIndex].push(item);
    return chunks;
  }, []);
};

export default AdvertisementList;





