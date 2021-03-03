import React from 'react';
import {useParams} from "react-router-dom";
import PropTypes from 'prop-types';

import FormReview from '../form-review/form-review';
import ListOfOffersNearby from '../list-of-offers-nearby/list-of-offers-nearby.jsx';
import ListOfReviews from '../list-of-reviews/list-of-reviews';
import Map from '../map/map';
import Header from '../header/header';

const OfferPage = ({offers, reviews, hosts}) => {
  const {id} = useParams();
  const offer = offers.find((item) => +item.id === +id);
  const reviewsId = reviews.filter((review) => review.id === offer.id);
  const host = hosts.find((item) => item.id === offer.hostId);
  const otherOffers = offers.filter((item) => item.id !== offer.id && offer.city.name === item.city.name);
  return (
    <React.Fragment>
      <div style={{display: `none`}}>
        <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg>
      </div>
      <div className="page">
        <Header/>
        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {offer.images.map((image, i) => <div className="property__image-wrapper" key={i * 2 + image}>
                  <img className="property__image" src={image} alt="Photo studio" />
                </div>)}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {offer.isPremium && (<div className="property__mark">
                  <span>Premium</span>
                </div>)}
                <div className="property__name-wrapper">
                  <h1 className="property__name">{offer.title}</h1>
                  <button className="property__bookmark-button button" type="button">
                    <svg className="property__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: 20 * offer.rating + `%`}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{offer.rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">{offer.type}</li>
                  <li className="property__feature property__feature--bedrooms">{offer.bedrooms} bedrooms</li>
                  <li className="property__feature property__feature--adults">Max {offer.adults} adults</li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{offer.price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {offer.goods.map((good, i) => <li className="property__inside-item" key={(i * 2) + good}>
                      {good}
                    </li>)}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
                    </div>
                    <span className="property__user-name">{host.name}</span>
                  </div>
                  <div className="property__description">
                    <p className="property__text">{offer.description}</p>
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsId.length}</span></h2>
                  <ListOfReviews reviews={reviewsId}/>
                  <FormReview/>
                </section>
              </div>
            </div>
            <section className="property__map map">
              <Map offers={otherOffers} activeLocation={offer.city.name}/>
            </section>
          </section>
          <div className="container">
            <ListOfOffersNearby offers={otherOffers}/>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
};

OfferPage.propTypes = {
  offers: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired,
  hosts: PropTypes.array.isRequired,
};

export default OfferPage;
