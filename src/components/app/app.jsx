import React from 'react';
import MainScreen from '../main-screen/main-screen';

const App = () => {
  const cards = [{
    image: `img/apartment-01.jpg`,
    isPremium: true,
    price: 120,
    rating: 4,
    title: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
  }, {
    image: `img/room.jpg`,
    isPremium: false,
    price: 80,
    rating: 4,
    title: `Wood and stone place`,
    type: `Private room`,
  }, {
    image: `img/apartment-02.jpg`,
    isPremium: false,
    price: 132,
    rating: 4,
    title: `Canal View Prinsengracht`,
    type: `Apartment`,
  }, {
    image: `img/apartment-03.jpg`,
    isPremium: true,
    price: 180,
    rating: 5,
    title: `Nice, cozy, warm big bed apartment`,
    type: `Apartment`,
  }, {
    image: `img/room.jpg`,
    isPremium: false,
    price: 80,
    rating: 4,
    title: `Wood and stone place`,
    type: `Private room`,
  }];
  return <MainScreen cards={cards}/>;
};

export default App;
