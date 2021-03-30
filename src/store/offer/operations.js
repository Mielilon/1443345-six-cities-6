import * as actions from './actions';
import * as mainActions from '../main/actions';
import {Status} from '../../services/load-statuses';
import {dataToHotelOffer, dataToComment} from '../../services/adapters';
import browserHistory from '../../browser-history';

const ERROR_TIMEOUT = 5000;

export const loadOffer = (id) => (dispatch, _getState, api) => {
  dispatch(actions.setLoaded(Status.LOAD));
  return Promise.all([
    api.get(`hotels/${id}`),
    api.get(`hotels/${id}/nearby`),
    api.get(`comments/${id}`)
  ])
    .then(([offer, nearby, reviews]) => {
      dispatch(actions.setOffer(dataToHotelOffer(offer.data)));
      dispatch(actions.setNearby(nearby.data.map(dataToHotelOffer)));
      dispatch(actions.setReviews(reviews.data.map(dataToComment)));
      dispatch(actions.setLoaded(Status.LOADED));
    })
    .catch((error) => {
      if (error.response.status === 404) {
        dispatch(browserHistory.push(`/404`));
      }
      dispatch(actions.setLoaded(Status.ERROR));
    });
};

export const sendComment = (id, comment, rating) => (dispatch, _getState, api) => {
  dispatch(actions.setReviewLoaded(Status.LOAD));
  return api.post(`comments/${id}`, {comment, rating})
    .then(({data}) => {
      dispatch(actions.setReviews(data.map(dataToComment)));
      dispatch(actions.setReviewLoaded(Status.LOADED));
    })
    .catch(() => {
      dispatch(actions.setReviewLoaded(Status.ERROR));
    })
    .finally(() => {
      setTimeout(() => dispatch(actions.setReviewLoaded(Status.PENDING)), ERROR_TIMEOUT);
    });
};

export const changeFavorite = (id, status) => (dispatch, _getState, api) => {
  return api.post(`favorite/${id}/${Number(status)}`)
    .then(({data}) => {
      dispatch(actions.setOffer(dataToHotelOffer(data)));
      dispatch(mainActions.changeOffer(dataToHotelOffer(data)));
    })
    .catch(() => {
      dispatch(actions.setLoaded(Status.ERROR));
    });
};

export const changeNearbyFavorite = (id, status) => (dispatch, _getState, api) => {
  return api.post(`favorite/${id}/${Number(status)}`)
    .then(({data}) => {
      dispatch(actions.changeNearby(dataToHotelOffer(data)));
      dispatch(mainActions.changeOffer(dataToHotelOffer(data)));
    })
    .catch(() => {
      dispatch(actions.setLoaded(Status.ERROR));
    });
};
