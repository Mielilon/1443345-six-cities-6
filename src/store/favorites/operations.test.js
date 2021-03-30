import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../services/api';
import * as operations from './operations';
import * as types from './types';
import * as mainTypes from '../main/types';
import {offersFull} from '../../tests-mock';
import {Status} from '../../services/load-statuses';

const api = createAPI(() => {});

describe(`Favorites async operation work correctly`, () => {
  it(`Should make a correct API call to /favorite with loadFavorites`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const loadFavoritesOperation = operations.loadFavorites();

    apiMock
      .onGet(`favorite`)
      .reply(200, offersFull.api);

    return loadFavoritesOperation(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: types.SET_LOADED,
          payload: Status.LOAD
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: types.OFFERS_SET,
          payload: offersFull.adapted,
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: types.SET_LOADED,
          payload: Status.LOADED
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
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: types.CHANGE_OFFER,
          payload: offersFull.adapted[0],
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: mainTypes.CHANGE_OFFER,
          payload: offersFull.adapted[0],
        });
      });
  });
});
