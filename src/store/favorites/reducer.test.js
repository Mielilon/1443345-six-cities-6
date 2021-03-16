import favoritesReducer, {initialState} from './reducer';
import * as actions from './actions';
import {simpleMock, offers} from '../../tests-mock';

describe(`Favorite reducers work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(favoritesReducer(undefined, {})).toEqual(initialState);
  });

  it(`Reducer should change offers with setOffers action creator`, () => {
    const expectedState = {
      ...initialState,
      offers: [simpleMock]
    };

    expect(favoritesReducer(undefined, actions.setOffers([simpleMock]))).toEqual(expectedState);
  });

  it(`Reducer should change loaded with setLoaded action creator`, () => {
    const expectedState = {
      ...initialState,
      loaded: simpleMock
    };

    expect(favoritesReducer(undefined, actions.setLoaded(simpleMock))).toEqual(expectedState);
  });

  it(`Reducer should change offers with changeOffer action creator`, () => {
    const state = {
      ...initialState,
      offers: [...offers.start]
    };
    const expectedState = {
      ...initialState,
      offers: [...offers.endWithRemove]
    };

    expect(favoritesReducer(state, actions.changeOffer({...offers.changedOffer}))).toEqual(expectedState);
  });
});
