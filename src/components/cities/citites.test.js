import React from 'react';
import {render} from '@testing-library/react';
import Test from '../test/test';

import Cities from './cities';
import {offersFull} from '../../tests-mock';

describe(`Cities component test`, () => {
  const location = `Paris`;

  it(`'Cities component' should render correctly with no offers`, () => {
    const {container} = render(
        <Test>
          <Cities
            offers={[]}
            location={location}
            isEmpty={true} />
        </Test>
    );

    expect(container).toMatchSnapshot();
  });

  it(`'Cities component' should render correctly with offers`, () => {
    const {container} = render(
        <Test>
          <Cities
            offers={offersFull.adapted}
            location={location}
            isEmpty={false} />
        </Test>
    );

    expect(container).toMatchSnapshot();
  });
});
