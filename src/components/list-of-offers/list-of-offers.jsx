import React, {useState} from 'react';
import PropTypes from 'prop-types';
import PlacesSorting from '../offers-sorting/offers-sorting';
import Offer from '../offer/offer';

const ListOfOffers = ({offers, location, setActiveOfferId}) => {
  const [sortingType, setSortingType] = useState(`Popular`);
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offers.length} places to stay in {location}</b>
      <PlacesSorting activeOption={sortingType} changeOption={setSortingType} />
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer, i) => <Offer key={offer.title + i} {...offer} onChnageActiveOfferId={setActiveOfferId}/>)}
      </div>
    </section>
  );
};

ListOfOffers.propTypes = {
  offers: PropTypes.array.isRequired,
  location: PropTypes.string.isRequired,
  setActiveOfferId: PropTypes.func.isRequired,
};

export default ListOfOffers;
