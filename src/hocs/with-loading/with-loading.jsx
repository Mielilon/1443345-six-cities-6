import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../../components/spiner/spiner';
import {Status} from '../../services/load-statuses';

const withLoading = (Component) => {
  const WithLoading = (props) => {
    return (
      <>
        {props.isLoaded === Status.LOAD && <Spinner />}
        <Component {...props} />
      </>
    );
  };

  WithLoading.propTypes = {
    isLoaded: PropTypes.oneOf([...Object.values(Status)]).isRequired
  };

  return WithLoading;
};

export default withLoading;
