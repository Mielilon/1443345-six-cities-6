import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

import offers from './mocks/offers.js';
import reviews from './mocks/reviews';
import hosts from './mocks/hosts';

ReactDOM.render(
    <App offers={offers} reviews={reviews} hosts={hosts}/>,
    document.getElementById(`root`)
);
