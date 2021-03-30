import {createReducer} from '@reduxjs/toolkit';
import * as actions from './actions';
import {Status} from '../../services/load-statuses';

const initialState = {
  location: `Paris`,
  offers: [],
  type: `Popular`,
  loaded: Status.PENDING
};

const mainReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.setLocation, (state, action) => {
      state.location = action.payload;
    })
    .addCase(actions.setOffers, (state, action) => {
      state.offers = [...action.payload];
    })
    .addCase(actions.setType, (state, action) => {
      state.type = action.payload;
    })
    .addCase(actions.setLoaded, (state, action) => {
      state.loaded = action.payload;
    })
    .addCase(actions.changeOffer, (state, action) => {
      const index = state.offers.findIndex((offer) => offer.id === action.payload.id);
      state.offers = [
        ...state.offers.slice(0, index),
        action.payload,
        ...state.offers.slice(index + 1)
      ];
    });
});

export default mainReducer;
export {
  initialState
};
