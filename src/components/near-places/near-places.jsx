import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import OffersList from '../offers-list/offers-list';
import {changeNearbyFavorite} from '../../store/offer/operations';

const NearPlaces = ({places, onFavoriteClick}) => {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <OffersList offers={places} offerType="offer" onFavoriteClick={onFavoriteClick} />
    </section>
  );
};

NearPlaces.propTypes = {
  places: PropTypes.array.isRequired,
  onFavoriteClick: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  onFavoriteClick: changeNearbyFavorite
};

export default connect(null, mapDispatchToProps)(NearPlaces);
