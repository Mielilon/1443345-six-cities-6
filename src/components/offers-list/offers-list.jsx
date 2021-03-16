import React from 'react';
import PropTypes from 'prop-types';
import Offer from '../offer/offer';

const OFFER_TYPES = {
  main: `cities__places-list places__list tabs__content`,
  favorites: `favorites__places`,
  offer: `near-places__list places__list`
};

const OffersList = ({offers, offerType, onChnageActiveOfferId = () => {}, onFavoriteClick}) => {
  const changeActiveOfferIdHandler = React.useCallback((id) => onChnageActiveOfferId(id), []);

  return (
    <div className={OFFER_TYPES[offerType]}>
      {offers.map((offer) =>
        <Offer
          offerType={offerType}
          key={offer.id}
          onChnageActiveOfferId={changeActiveOfferIdHandler}
          onFavoriteClick={onFavoriteClick}
          {...offer} />)}
    </div>
  );
};

OffersList.propTypes = {
  offers: PropTypes.array.isRequired,
  offerType: PropTypes.string.isRequired,
  onChnageActiveOfferId: PropTypes.func,
  onFavoriteClick: PropTypes.func.isRequired
};

export default React.memo(OffersList);
