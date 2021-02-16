import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import MainScreen from '../main-screen/main-screen';
import Favorites from '../favorites/favorites.jsx';
import Login from '../login/login.jsx';
import OfferPage from '../offer-page/offer-page.jsx';
import NotFoundScreen from '../not-found-screen/not-found-screen.jsx';


const App = ({offers, reviews, hosts}) => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <MainScreen offers={offers}/>
          </Route>
          <Route exact path="/favorites">
            <Favorites offers={offers.filter((offer) => offer.isFavorite === true)}/>
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/offer/:id">
            <OfferPage offers={offers} reviews={reviews} hosts={hosts}/>
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
