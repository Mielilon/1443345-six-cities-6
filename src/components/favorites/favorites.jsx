import React from 'react';
import PropTypes from 'prop-types';
import FavoritesLocation from '../favorites-location/favorites-location';

const CITIES_LIST = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];

const Favorites = ({offers}) => {
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {
          CITIES_LIST.map(
              (city, index) => {
                const filteredOffers = offers.filter((offer) => offer.city.name === city);
                return filteredOffers.length < 1 ? `` : <FavoritesLocation city={city} offers={filteredOffers} key={`favorite-city-${index}`} />;
              })
        }
      </ul>
    </section>
  );
};

Favorites.propTypes = {
  offers: PropTypes.array.isRequired
};

export default Favorites;
