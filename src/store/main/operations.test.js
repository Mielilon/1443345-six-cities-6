import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../services/api';
import * as operations from './operations';
import * as types from './types';
import {offersFull} from '../../tests-mock';
import {Statuses} from '../../services/load-statuses';

const api = createAPI(() => {});

describe(`Main async operation work correctly`, () => {
  it(`Should make a correct API call to /hotels with loadOffers`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const loadFavoritesOperation = operations.loadOffers();

    apiMock
      .onGet(`hotels`)
      .reply(200, offersFull.api);

    return loadFavoritesOperation(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: types.SET_LOADED,
          payload: Statuses.LOAD
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: types.SET_OFFERS,
          payload: offersFull.adapted,
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: types.SET_LOADED,
          payload: Statuses.LOADED
        });
      });
  });

  it(`Should make a correct API call to /favorite/:id/:status with changeFavorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const changeFavoritesOperation = operations.changeFavorite(1, 1);

    apiMock
      .onPost(`favorite/1/1`)
      .reply(200, offersFull.api[0]);

    return changeFavoritesOperation(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: types.CHANGE_OFFER,
          payload: offersFull.adapted[0],
        });
      });
  });
});
