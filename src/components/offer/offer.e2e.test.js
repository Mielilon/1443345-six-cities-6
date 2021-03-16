import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import Test from '../test/test';

import Offer from './offer';
import {offersFull} from '../../tests-mock';

describe(`Offer component e2e test`, () => {
  const type = `main`;
  const offer = offersFull.adapted[0];

  it(`'Offer component' should call callback when mouse enter component`, () => {
    const handlerMouseEnter = jest.fn();

    const {container} = render(
        <Test>
          <Offer
            offerType={type}
            onChnageActiveOfferId={handlerMouseEnter}
            onFavoriteClick={jest.fn()}
            {...offer} />
        </Test>
    );

    fireEvent.mouseEnter(container.firstChild);
    expect(handlerMouseEnter).toHaveBeenCalled();
  });

  it(`'Offer component' should call callback when mouse leave component`, () => {
    const handlerMouseLeave = jest.fn();

    const {container} = render(
        <Test>
          <Offer
            offerType={type}
            onChnageActiveOfferId={handlerMouseLeave}
            onFavoriteClick={jest.fn()}
            {...offer} />
        </Test>
    );

    fireEvent.mouseLeave(container.firstChild);
    expect(handlerMouseLeave).toHaveBeenCalled();
  });

  it(`'Offer component' should call callback when click on 'To bookmarks' button`, () => {
    const handlerFavoriteClick = jest.fn();

    const {getByTestId} = render(
        <Test initial={false}>
          <Offer
            offerType={type}
            onChnageActiveOfferId={jest.fn}
            onFavoriteClick={handlerFavoriteClick}
            {...offer} />
        </Test>
    );

    fireEvent.click(getByTestId(`to-bookmarks-button`));
    expect(handlerFavoriteClick).toHaveBeenCalled();
  });
});
