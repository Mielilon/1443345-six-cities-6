import * as actions from './actions';
import * as mainActions from '../main/actions';
import {Status} from '../../services/load-statuses';
import {dataToHotelOffer} from '../../services/adapters';

export const loadFavorites = () => (dispatch, _getState, api) => {
  dispatch(actions.setLoaded(Status.LOAD));
  return api.get(`favorite`)
    .then(({data}) => {
      dispatch(actions.setOffers(data.map(dataToHotelOffer)));
      dispatch(actions.setLoaded(Status.LOADED));
    })
    .catch(() => {
      dispatch(actions.setLoaded(Status.ERROR));
    });
};

export const changeFavorite = (id, status) => (dispatch, _getState, api) => {
  return api.post(`favorite/${id}/${Number(status)}`)
    .then(({data}) => {
      dispatch(actions.changeOffer(dataToHotelOffer(data)));
      dispatch(mainActions.changeOffer(dataToHotelOffer(data)));
    })
    .catch(() => {
      dispatch(actions.setLoaded(Status.ERROR));
    });
};
