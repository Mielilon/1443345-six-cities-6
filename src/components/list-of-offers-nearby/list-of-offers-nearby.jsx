import React from 'react';
import PropTypes from 'prop-types';
import Offer from '../offer/offer';

const ListOfOffersNearby = ({offers}) => {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {offers.slice(0, 3).map((item, i) => <Offer key={item.title + i * 2} {...item}/>)}
      </div>
    </section>);
};


ListOfOffersNearby.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default ListOfOffersNearby;
