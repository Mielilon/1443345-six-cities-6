import React from 'react';
import {render} from '@testing-library/react';
import Test from '../test/test';

import OffersList from './offers-list';
import {offersFull} from '../../tests-mock';

describe(`OffersList component test`, () => {
  it(`'OffersList component' should render correctly`, () => {
    const type = `main`;

    const {container} = render(
        <Test>
          <OffersList
            offers={offersFull.adapted}
            offerType={type}
            onChnageActiveOfferId={jest.fn()}
            onFavoriteClick={jest.fn()} />
        </Test>
    );

    expect(container).toMatchSnapshot();
  });
});
