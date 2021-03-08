import React from 'react';
import PropTypes from 'prop-types';
import Spiner from '../components/spiner/spiner';
import {Statuses} from '../services/load-statuses';

const withLoading = (Component) => {
  const WithLoading = (props) => {
    return (
      <>
        {props.isLoaded === Statuses.LOAD && <Spiner />}
        <Component {...props} />
      </>
    );
  };

  WithLoading.propTypes = {
    isLoaded: PropTypes.oneOf([...Object.values(Statuses)]).isRequired
  };

  return WithLoading;
};

export default withLoading;
