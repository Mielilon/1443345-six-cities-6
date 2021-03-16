import React from 'react';
import {render} from '@testing-library/react';

import Map from './map';
import {offersFull} from '../../tests-mock';

describe(`Map component test`, () => {
  const activeLocation = `Paris`;

  it(`Map component' should render correctly with 'main' type and 'active offer'`, () => {
    const type = `main`;

    const {container} = render(
        <Map
          activeLocation={activeLocation}
          offers={offersFull.adapted}
          activeOfferId={offersFull.adapted[0].id}
          type={type} />
    );

    expect(container).toMatchSnapshot();
  });

  it(`Map component' should render correctly with 'offer' type and without 'active offer'`, () => {
    const type = `offer`;

    const {container} = render(
        <Map
          activeLocation={activeLocation}
          offers={offersFull.adapted}
          activeOfferId={null}
          type={type} />
    );

    expect(container).toMatchSnapshot();
  });
});
