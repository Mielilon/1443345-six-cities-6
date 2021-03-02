import React from 'react';
import PropTypes from 'prop-types';
import Review from '../review/review';

const ListOfReviews = ({reviews}) => {
  return (
    <ul className="reviews__list">
      {reviews.map((review, i) => <Review key={review + i} review={reviews[i]} />)}
    </ul>
  );
};


ListOfReviews.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default ListOfReviews;
