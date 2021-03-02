import {createSelector} from 'reselect';

export const getLocation = (state) => state.main.location;
export const getAllOffers = (state) => state.main.offers;
export const getType = (state) => state.main.type;
export const getIsLoaded = (state) => state.main.loaded;

export const getOffers = createSelector(
    [getLocation, getAllOffers, getType],
    (location, offers, type) => {
      const suitableOffers = offers.filter((offer) => offer.city.name === location);
      switch (type) {
        case `Price: high to low`:
          return suitableOffers.sort((a, b) => b.price - a.price);

        case `Price: low to high`:
          return suitableOffers.sort((a, b) => a.price - b.price);

        case `Top rated first`:
          return suitableOffers.sort((a, b) => b.rating - a.rating);

        default:
          return suitableOffers;
      }
    }
);
