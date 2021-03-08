import {createAction} from '@reduxjs/toolkit';
import * as types from './types';

export const setOffers = createAction(types.SET_OFFERS, (offers) => {
  return {
    payload: offers
  };
});

export const setLoaded = createAction(types.SET_LOADED, (loaded) => {
  return {
    payload: loaded
  };
});

export const changeOffer = createAction(types.CHANGE_OFFER, (offer) => {
  return {
    payload: offer
  };
});
