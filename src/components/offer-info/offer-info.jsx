import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';
import {offerPropTypes} from '../../prop-types.prop';
import Reviews from '../reviews/reviews';
import Map from '../map/map';
import withAuth from '../../hocs/with-auth/with-auth';
import {changeFavorite} from '../../store/offer/operations';

const RATING_PER_STAR = 20;
const maxImages = 6;

const OfferInfo = ({offer, reviews, mapPlaces, onFavoriteClick, isAuth}) => {
  const {images, isPremium, title, isFavorite, rating, type, bedrooms, maxAdults, price, goods, host, description, id, location} = offer;
  const history = useHistory();

  return (
    <section className="property">
      <div className="property__gallery-container container">
        <div className="property__gallery">
          {images.slice(0, maxImages).map((image, index) => (
            <div className="property__image-wrapper" key={`property-image-${index}`}>
              <img className="property__image" src={image} alt="Photo studio" />
            </div>
          ))}
        </div>
      </div>
      <div className="property__container container">
        <div className="property__wrapper">
          {isPremium && <div className="property__mark"><span>Premium</span></div> || ``}
          <div className="property__name-wrapper">
            <h1 className="property__name">
              {title}
            </h1>
            <button
              className={`property__bookmark-button button${isFavorite && ` property__bookmark-button--active` || ``}`}
              type="button"
              onClick={() => isAuth ? onFavoriteClick(id, !isFavorite) : history.push(`/login`)}
              data-testid="to-bookmarks">
              <svg className="property__bookmark-icon" width="31" height="33">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="property__rating rating">
            <div className="property__stars rating__stars">
              <span style={{width: `${RATING_PER_STAR * rating}%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
            <span className="property__rating-value rating__value">{rating}</span>
          </div>
          <ul className="property__features">
            <li className="property__feature property__feature--entire">
              {type}
            </li>
            <li className="property__feature property__feature--bedrooms">
              {bedrooms} Bedrooms
            </li>
            <li className="property__feature property__feature--adults">
              Max {maxAdults} adults
            </li>
          </ul>
          <div className="property__price">
            <b className="property__price-value">&euro;{price}</b>
            <span className="property__price-text">&nbsp;night</span>
          </div>
          <div className="property__inside">
            <h2 className="property__inside-title">What&apos;s inside</h2>
            <ul className="property__inside-list">
              {goods.map((good, index) => (
                <li className="property__inside-item" key={`property-good-${index}`}>
                  {good}
                </li>
              ))}
            </ul>
          </div>
          <div className="property__host">
            <h2 className="property__host-title">Meet the host</h2>
            <div className="property__host-user user">
              <div className={`property__avatar-wrapper user__avatar-wrapper${host.isPro && ` property__avatar-wrapper--pro` || ``}`}>
                <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
              </div>
              <span className="property__user-name">
                {host.name}
              </span>
            </div>
            <div className="property__description">
              <p className="property__text">
                {description}
              </p>
            </div>
          </div>
          <Reviews reviews={reviews} isAuth={isAuth} />
        </div>
      </div>
      <Map offers={[...mapPlaces, offer]} activeLocation={[location.latitude, location.longitude]} activeOfferId={id} type="offer" />
    </section>
  );
};

const SemiPureOfferInfo = withAuth(OfferInfo);

OfferInfo.propTypes = {
  offer: PropTypes.shape(offerPropTypes).isRequired,
  reviews: PropTypes.array.isRequired,
  mapPlaces: PropTypes.array.isRequired,
  isAuth: PropTypes.bool.isRequired,
  onFavoriteClick: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  onFavoriteClick: changeFavorite
};

export default compose(
    connect(null, mapDispatchToProps),
    withAuth
)(OfferInfo);
export {
  SemiPureOfferInfo
};
