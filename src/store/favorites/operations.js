import * as actions from './actions';
import * as mainActions from '../main/actions';
import {Statuses} from '../../services/load-statuses';
import {dataToHotelOffer} from '../../services/adapters';

export const loadFavorites = () => (dispatch, _getState, api) => {
  dispatch(actions.setLoaded(Statuses.LOAD));
  api.get(`favorite`)
    .then(({data}) => {
      dispatch(actions.setOffers(data.map(dataToHotelOffer)));
      dispatch(actions.setLoaded(Statuses.LOADED));
    })
    .catch(() => {
      dispatch(actions.setLoaded(Statuses.ERROR));
    });
};

export const changeFavorite = (id, status) => (dispatch, _getState, api) => {
  api.post(`favorite/${id}/${Number(status)}`)
    .then(({data}) => {
      dispatch(actions.changeOffer(dataToHotelOffer(data)));
      dispatch(mainActions.changeOffer(dataToHotelOffer(data)));
    })
    .catch(() => {
      dispatch(actions.setLoaded(Statuses.ERROR));
    });
};