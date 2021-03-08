import {createAction} from '@reduxjs/toolkit';
import * as types from './types';

export const setLocation = createAction(types.SET_LOCATION, (location) => {
  return {
    payload: location
  };
});

export const setOffers = createAction(types.SET_OFFERS, (offers) => {
  return {
    payload: offers
  };
});

export const setType = createAction(types.SET_TYPE, (type) => {
  return {
    payload: type
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
