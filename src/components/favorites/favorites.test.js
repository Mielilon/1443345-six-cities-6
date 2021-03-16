import React from 'react';
import {render} from '@testing-library/react';
import Test from '../test/test';

import Favorites from './favorites';
import {offersFull} from '../../tests-mock';

describe(`Favorites component test`, () => {
  it(`'Favorites component' should render correctly`, () => {
    const {container} = render(
        <Test>
          <Favorites offers={offersFull.adapted} />
        </Test>
    );

    expect(container).toMatchSnapshot();
  });
});
