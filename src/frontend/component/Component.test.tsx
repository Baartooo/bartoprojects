import { render } from '@testing-library/react';

import { Component } from './Component';

describe('sth', () => {
  it('works', () => {
    const { getByTestId } = render(<Component />);
    const div = getByTestId('test-component');
    expect(div).toBeInTheDocument();
  });
});
