import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getOffers, getIsLoaded, getLocation} from '../../../store/main/selectors';
import {setLocation} from '../../../store/main/actions';
import Header from '../../header/header';
import Locations from '../../locations/locations';
import Cities from '../../cities/cities';
import withLoading from '../../../hocs/with-loading/with-loading';

const MainPage = ({location, offers, onChangeLocation}) => {
  const isEmpty = !offers.length;

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className={`page__main page__main--index${isEmpty && ` page__main--index-empty` || ``}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Locations activeLocation={location} changeLocation={onChangeLocation} />
        </div>
        <Cities offers={offers} location={location} isEmpty={isEmpty} />
      </main>
    </div>
  );
};

MainPage.propTypes = {
  location: PropTypes.string.isRequired,
  offers: PropTypes.array.isRequired,
  onChangeLocation: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  location: getLocation(state),
  offers: getOffers(state),
  isLoaded: getIsLoaded(state)
});

const mapDispatchToProps = {
  onChangeLocation: setLocation
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withLoading
)(MainPage);
