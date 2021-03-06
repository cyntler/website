import { render, screen } from '@testing-library/react';

import { APP_LOGO_ALT } from '~/constants';
import { Header } from '../Header';

test('render header logo', () => {
  render(<Header />);

  expect(screen.getByAltText(APP_LOGO_ALT)).toBeInTheDocument();
});
