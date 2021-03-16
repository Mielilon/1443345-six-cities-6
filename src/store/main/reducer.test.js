import mainReducer, {initialState} from './reducer';
import * as actions from './actions';
import {simpleMock, offers} from '../../tests-mock';

describe(`Main reducers work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(mainReducer(undefined, {})).toEqual(initialState);
  });

  it(`Reducer should change location with setLocation action creator`, () => {
    const expectedState = {
      ...initialState,
      location: simpleMock
    };

    expect(mainReducer(undefined, actions.setLocation(simpleMock))).toEqual(expectedState);
  });

  it(`Reducer should change offers with setOffers action creator`, () => {
    const expectedState = {
      ...initialState,
      offers: [simpleMock]
    };

    expect(mainReducer(undefined, actions.setOffers([simpleMock]))).toEqual(expectedState);
  });

  it(`Reducer should change type with setType action creator`, () => {
    const expectedState = {
      ...initialState,
      type: simpleMock
    };

    expect(mainReducer(undefined, actions.setType(simpleMock))).toEqual(expectedState);
  });

  it(`Reducer should change loaded with setLoaded action creator`, () => {
    const expectedState = {
      ...initialState,
      loaded: simpleMock
    };

    expect(mainReducer(undefined, actions.setLoaded(simpleMock))).toEqual(expectedState);
  });

  it(`Reducer should change offers with changeOffer action creator`, () => {
    const state = {
      ...initialState,
      offers: [...offers.start]
    };
    const expectedState = {
      ...initialState,
      offers: [...offers.end]
    };

    expect(mainReducer(state, actions.changeOffer({...offers.changedOffer}))).toEqual(expectedState);
  });
});
