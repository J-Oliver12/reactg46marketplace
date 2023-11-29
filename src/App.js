import React from 'react';
import AdvertisementList from './components/AdvertisementList';
import Header from './components/Header'; 
import Footer from './components/Footer';

const App = () => {
  const advertisementsData = [
    {
      title: 'Ad 1',
      description: 'This is the first advertisement.',
      image: 'https://via.placeholder.com/150',
      contact: 'contact1@example.com',
    },
    {
      title: 'Ad 2',
      description: 'This is the second advertisement.',
      image: 'https://via.placeholder.com/150',
      contact: 'contact2@example.com',
    },
    {
      title: 'Ad 3',
      description: 'This is the third advertisement.',
      image: 'https://via.placeholder.com/150',
      contact: 'contact3@example.com',
    },
  ];

  return (
    <div>
      <Header />
      <AdvertisementList advertisements={advertisementsData} />
      <Footer /> 
    </div>
  );
};

export default App;
