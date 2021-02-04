import React from 'react';
import MainScreen from '../main-screen/main-screen';
import PropTypes from 'prop-types';

const App = ({cards}) => {
  return <MainScreen cards={cards}/>;
};

App.propTypes = {
  cards: PropTypes.array,
};


export default App;
