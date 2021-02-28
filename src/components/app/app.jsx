import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import MainScreen from '../main-screen/main-screen';
import Favorites from '../favorites/favorites';
import Login from '../login/login';
import OfferPage from '../offer-page/offer-page';
import NotFoundScreen from '../not-found-screen/not-found-screen';

const Routes = {
  MAIN: `/`,
  FAVORITES: `/favorites`,
  LOGIN: `/login`,
  OFFER: `/offer/:id`,
};

const App = ({offers, reviews, hosts}) => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path={Routes.MAIN}>
            <MainScreen offers={offers}/>
          </Route>
          <Route exact path={Routes.FAVORITES}>
            <Favorites offers={offers.filter((offer) => offer.isFavorite === true)}/>
          </Route>
          <Route exact path={Routes.LOGIN}>
            <Login />
          </Route>
          <Route exact path={Routes.OFFER}>
            { offers.find((offer) => `/offer/` + offer.id === location.pathname) ? <OfferPage offers={offers} reviews={reviews} hosts={hosts}/> : <NotFoundScreen /> }
          </Route>
          <Route>
            <NotFoundScreen />
          </Route>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
};

App.propTypes = {
  offers: PropTypes.array,
  reviews: PropTypes.array,
  hosts: PropTypes.array,
};


export default App;
