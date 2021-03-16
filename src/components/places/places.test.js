import React from 'react';
import {render} from '@testing-library/react';
import Test from '../test/test';

import Places from './places';
import {offersFull} from '../../tests-mock';

describe(`Places component test`, () => {
  it(`Places component' should render correctly`, () => {
    const location = `Paris`;

    const {container} = render(
        <Test>
          <Places
            offers={offersFull.adapted}
            location={location}
            setActiveOfferId={() => {}} />
        </Test>
    );

    expect(container).toMatchSnapshot();
  });
});
