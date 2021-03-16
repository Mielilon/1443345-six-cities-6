import * as types from './types';
import * as actions from './actions';
import {simpleMock} from '../../tests-mock';

describe(`Favorites action creators work correctly`, () => {
  it(`setOffers action creator returns correct action`, () => {
    const expectedAction = {
      type: types.SET_OFFERS,
      payload: simpleMock
    };

    expect(actions.setOffers(simpleMock)).toEqual(expectedAction);
  });

  it(`setLoaded action creator returns correct action`, () => {
    const expectedAction = {
      type: types.SET_LOADED,
      payload: simpleMock
    };

    expect(actions.setLoaded(simpleMock)).toEqual(expectedAction);
  });

  it(`changeOffer action creator returns correct action`, () => {
    const expectedAction = {
      type: types.CHANGE_OFFER,
      payload: simpleMock
    };

    expect(actions.changeOffer(simpleMock)).toEqual(expectedAction);
  });
});
