import {createReducer} from '@reduxjs/toolkit';
import * as actions from './actions';
import {Statuses} from '../../services/load-statuses';

const initialState = {
  offers: [],
  loaded: Statuses.PENDING
};

const favoritesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.setOffers, (state, action) => {
      state.offers = [...action.payload];
    })
    .addCase(actions.setLoaded, (state, action) => {
      state.loaded = action.payload;
    })
    .addCase(actions.changeOffer, (state, action) => {
      const index = state.offers.findIndex((offer) => offer.id === action.payload.id);
      state.offers = [
        ...state.offers.slice(0, index),
        ...state.offers.slice(index + 1)
      ];
    });
});

export default favoritesReducer;
export {
  initialState
};
