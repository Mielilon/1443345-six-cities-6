const maxOffersNearby = 3;
const maxReviews = 10;

export const getOffer = (state) => state.offer.offer;
export const getNearby = (state) => state.offer.nearby.slice(0, maxOffersNearby);
export const getReviews = (state) => state.offer.reviews.slice(0, maxReviews);
export const getIsLoaded = (state) => state.offer.loaded;
export const getReviewIsLoaded = (state) => state.offer.reviewLoaded;
