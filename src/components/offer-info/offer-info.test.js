import React from 'react';
import {render} from '@testing-library/react';
import Test from '../test/test';

import OfferInfo from './offer-info';
import {offersFull, comments} from '../../tests-mock';

describe(`OfferInfo component test`, () => {
  it(`OfferInfo component' should render correctly`, () => {
    const {container} = render(
        <Test>
          <OfferInfo
            offer={offersFull.adapted[0]}
            reviews={comments.adapted}
            mapPlaces={offersFull.adapted} />
        </Test>
    );

    expect(container).toMatchSnapshot();
  });
});
