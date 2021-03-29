import React from 'react';
import '@testing-library/jest-dom';
import {fireEvent, render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {PureLoginForm as LoginForm} from './login-form';

describe(`LoginForm component e2e test`, () => {
  it(`LoginForm component' should correctly change fields`, () => {
    const mail = `abc@mail.ru`;
    const password = `abc`;

    const {getByTestId, getByDisplayValue} = render(<LoginForm onSubmit={jest.fn()} />);

    userEvent.type(getByTestId(`email`), mail);
    userEvent.type(getByTestId(`password`), password);
    expect(getByDisplayValue(mail)).toBeInTheDocument();
    expect(getByDisplayValue(password)).toBeInTheDocument();
  });

  it(`LoginForm component' should call callback when submit form`, () => {
    const handleOnSubmit = jest.fn();

    const {getByTestId} = render(<LoginForm onSubmit={handleOnSubmit} />);

    fireEvent.submit(getByTestId(`form`));
    expect(handleOnSubmit).toHaveBeenCalled();
  });
});
