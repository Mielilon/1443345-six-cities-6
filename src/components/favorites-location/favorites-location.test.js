import React from 'react';
import {render} from '@testing-library/react';
import Test from '../test/test';

import FavoritesLocation from './favorites-location';
import {offersFull} from '../../tests-mock';

describe(`FavoritesLocation component test`, () => {
  it(`'FavoritesLocation component' should render correctly`, () => {
    const city = `Paris`;

    const {container} = render(
        <Test>
          <FavoritesLocation
            city={city}
            offers={offersFull.adapted} />
        </Test>
    );

    expect(container).toMatchSnapshot();
  });
});
