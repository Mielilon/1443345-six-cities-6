import * as actions from './actions';
import {Statuses} from '../../services/load-statuses';
import {dataToHotelOffer} from '../../services/adapters';

export const loadOffers = () => (dispatch, _getState, api) => {
  dispatch(actions.setLoaded(Statuses.LOAD));
  api.get(`hotels`)
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
    })
    .catch(() => {
      dispatch(actions.setLoaded(Statuses.ERROR));
    });
};
