import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import Test from '../test/test';

import Offer from './offer';
import {offersFull} from '../../tests-mock';

describe(`Offer component e2e test`, () => {
  const type = `main`;
  const offer = offersFull.adapted[0];

  it(`'Offer component' should call callback when mouse enter component`, () => {
    const handleMouseEnter = jest.fn();

    const {container} = render(
        <Test>
          <Offer
            offerType={type}
            onChnageActiveOfferId={handleMouseEnter}
            onFavoriteClick={jest.fn()}
            {...offer} />
        </Test>
    );

    fireEvent.mouseEnter(container.firstChild);
    expect(handleMouseEnter).toHaveBeenCalled();
  });

  it(`'Offer component' should call callback when mouse leave component`, () => {
    const handleMouseLeave = jest.fn();

    const {container} = render(
        <Test>
          <Offer
            offerType={type}
            onChnageActiveOfferId={handleMouseLeave}
            onFavoriteClick={jest.fn()}
            {...offer} />
        </Test>
    );

    fireEvent.mouseLeave(container.firstChild);
    expect(handleMouseLeave).toHaveBeenCalled();
  });

  it(`'Offer component' should call callback when click on 'To bookmarks' button`, () => {
    const handleFavoriteClick = jest.fn();

    const {getByTestId} = render(
        <Test initial={false}>
          <Offer
            offerType={type}
            onChnageActiveOfferId={jest.fn}
            onFavoriteClick={handleFavoriteClick}
            {...offer} />
        </Test>
    );

    fireEvent.click(getByTestId(`to-bookmarks-button`));
    expect(handleFavoriteClick).toHaveBeenCalled();
  });
});
