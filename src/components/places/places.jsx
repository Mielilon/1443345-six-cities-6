import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import OffersList from '../offers-list/offers-list';
import PlacesSorting from '../places-sorting/places-sorting';
import {changeFavorite} from '../../store/main/operations';

const Places = ({offers, location, setActiveOfferId, onFavoriteClick}) => {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offers.length} places to stay in {location}</b>
      <PlacesSorting />
      <OffersList offers={offers} offerType="main" onChnageActiveOfferId={setActiveOfferId} onFavoriteClick={onFavoriteClick} />
    </section>
  );
};

Places.propTypes = {
  location: PropTypes.string.isRequired,
  offers: PropTypes.array.isRequired,
  setActiveOfferId: PropTypes.func.isRequired,
  onFavoriteClick: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  onFavoriteClick: changeFavorite
};

export default connect(null, mapDispatchToProps)(Places);
