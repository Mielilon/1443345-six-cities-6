import * as actions from './actions';
import * as mainActions from '../main/actions';
import {Statuses} from '../../services/load-statuses';
import {dataToHotelOffer, dataToComment} from '../../services/adapters';
import browserHistory from '../../browser-history';

const ERROR_TIMEOUT = 5000;

export const loadOffer = (id) => (dispatch, _getState, api) => {
  dispatch(actions.setLoaded(Statuses.LOAD));
  Promise.all([
    api.get(`hotels/${id}`),
    api.get(`hotels/${id}/nearby`),
    api.get(`comments/${id}`)
  ])
    .then(([offer, nearby, reviews]) => {
      dispatch(actions.setOffer(dataToHotelOffer(offer.data)));
      dispatch(actions.setNearby(nearby.data.map(dataToHotelOffer)));
      dispatch(actions.setReviews(reviews.data.map(dataToComment)));
      dispatch(actions.setLoaded(Statuses.LOADED));
    })
    .catch((error) => {
      if (error.response.status === 404) {
        dispatch(browserHistory.push(`/404`));
      }
      dispatch(actions.setLoaded(Statuses.ERROR));
    });
};

export const sendComment = (id, comment, rating) => (dispatch, _getState, api) => {
  dispatch(actions.setReviewLoaded(Statuses.LOAD));
  api.post(`comments/${id}/`, {comment, rating})
    .then(({data}) => {
      dispatch(actions.setReviews(data.map(dataToComment)));
      dispatch(actions.setReviewLoaded(Statuses.LOADED));
    })
    .catch(() => {
      dispatch(actions.setReviewLoaded(Statuses.ERROR));
    })
    .finally(() => {
      setTimeout(() => dispatch(actions.setReviewLoaded(Statuses.PENDING)), ERROR_TIMEOUT);
    });
};

export const changeFavorite = (id, status) => (dispatch, _getState, api) => {
  api.post(`favorite/${id}/${Number(status)}`)
    .then(({data}) => {
      dispatch(actions.setOffer(dataToHotelOffer(data)));
      dispatch(mainActions.changeOffer(dataToHotelOffer(data)));
    })
    .catch(() => {
      dispatch(actions.setLoaded(Statuses.ERROR));
    });
};

export const changeNearbyFavorite = (id, status) => (dispatch, _getState, api) => {
  api.post(`favorite/${id}/${Number(status)}`)
    .then(({data}) => {
      dispatch(actions.changeNearby(dataToHotelOffer(data)));
      dispatch(mainActions.changeOffer(dataToHotelOffer(data)));
    })
    .catch(() => {
      dispatch(actions.setLoaded(Statuses.ERROR));
    });
};
