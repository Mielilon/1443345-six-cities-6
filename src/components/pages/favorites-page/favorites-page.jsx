import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import PropTypes from 'prop-types';
import {getOffers, getIsLoaded} from '../../../store/favorites/selectors';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import FavoritesEmpty from '../../favorites-empty/favorites-empty';
import Favorites from '../../favorites/favorites';
import {loadFavorites} from '../../../store/favorites/operations';
import withLoading from '../../../hocs/with-loading/with-loading';

const FavoritesPage = ({offers, loadComponent}) => {
  useEffect(() => {
    loadComponent();
  }, []);

  const isEmpty = !offers.length;

  return (
    <div className={`page${isEmpty && ` page--favorites-empty` || ``}`}>
      <Header />
      <main className={`page__main page__main--favorites${isEmpty && ` page__main--favorites-empty` || ``}`}>
        <div className="page__favorites-container container">
          {isEmpty
            && <FavoritesEmpty />
            || <Favorites offers={offers} />}
        </div>
      </main>
      <Footer />
    </div>
  );
};

FavoritesPage.propTypes = {
  offers: PropTypes.array.isRequired,
  loadComponent: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  offers: getOffers(state),
  isLoaded: getIsLoaded(state)
});

const mapDispatchToProps = {
  loadComponent: loadFavorites
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withLoading
)(FavoritesPage);
