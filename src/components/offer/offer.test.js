import React from 'react';
import {render} from '@testing-library/react';
import Test from '../test/test';

import Offer from './offer';
import {offersFull} from '../../tests-mock';

describe(`Offer component test`, () => {
  it(`'Offer component' should render correctly`, () => {
    const type = `main`;

    const {container} = render(
        <Test>
          <Offer
            offerType={type}
            onChnageActiveOfferId={jest.fn()}
            onFavoriteClick={jest.fn()}
            {...offersFull.adapted[0]} />
        </Test>
    );

    expect(container).toMatchSnapshot();
  });
});
