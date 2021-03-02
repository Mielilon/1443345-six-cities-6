import * as types from './types';

export const setLocation = (location) => ({type: types.SET_LOCATION, payload: location});
export const setOffers = (offers) => ({type: types.SET_OFFERS, payload: offers});
export const setType = (type) => ({type: types.SET_TYPE, payload: type});
