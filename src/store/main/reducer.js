import * as types from './types';
import offersData from '../../mocks/offers.js';

const initialState = {
  location: `Paris`,
  offers: [...offersData],
  type: `Popular`
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_LOCATION:
      return {
        ...state,
        location: action.payload
      };

    case types.SET_OFFERS:
      return {
        ...state,
        offers: action.payload
      };

    case types.SET_TYPE:
      return {
        ...state,
        type: action.payload
      };

    default:
      return state;
  }
};

export default mainReducer;
