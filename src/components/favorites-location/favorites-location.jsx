import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import OffersList from '../offers-list/offers-list';
import {changeFavorite} from '../../store/favorites/operations';

const FavoritesLocation = ({city, offers, onFavoriteClick}) => {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <OffersList offers={offers} offerType="favorites" onFavoriteClick={onFavoriteClick} />
    </li>
  );
};

FavoritesLocation.propTypes = {
  city: PropTypes.string.isRequired,
  offers: PropTypes.array.isRequired,
  onFavoriteClick: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  onFavoriteClick: changeFavorite
};

export default connect(null, mapDispatchToProps)(FavoritesLocation);
