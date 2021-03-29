import React from 'react';
import '@testing-library/jest-dom';
import {fireEvent, render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {TestHistory as Test} from '../test/test';
import {Status} from '../../services/load-statuses';

import {PureReviewForm as ReviewForm} from './review-form';

describe(`ReviewForm component e2e test`, () => {
  it(`ReviewForm component' should correctly change field`, () => {
    const review = `Some mock text here`;

    const {getByTestId, getByDisplayValue} = render(
        <Test>
          <ReviewForm onSubmit={jest.fn()} isLoaded={Status.LOADED} />
        </Test>
    );

    userEvent.type(getByTestId(`review`), review);
    expect(getByDisplayValue(review)).toBeInTheDocument();
  });

  it(`LoginForm component' should call callback when submit form`, () => {
    const handleOnSubmit = jest.fn();

    const {getByTestId} = render(
        <Test>
          <ReviewForm onSubmit={handleOnSubmit} isLoaded={Status.LOADED} />
        </Test>
    );

    fireEvent.submit(getByTestId(`form`));
    expect(handleOnSubmit).toHaveBeenCalled();
  });
});
