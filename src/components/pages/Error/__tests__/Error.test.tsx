import { render, screen } from '../../../../tests/test-utils';
import { Error } from '../Error';

// eslint-disable-next-line @typescript-eslint/no-unsafe-return
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useRouteError: jest.fn(),
}));

describe('Error', () => {
  it('should show error message', () => {
    const errorMessageTitle = 'Oops! Something went wrong.';
    const errorMessageDescription = 'We apologize for the inconvenience. Please try again.';
    const errorMessageCTA = 'Return to Home';

    render(<Error />);

    const titleElement = screen.getByText(errorMessageTitle);
    const descriptionElement = screen.getByText(errorMessageDescription);
    const ctaElement = screen.getByText(errorMessageCTA);

    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(ctaElement).toBeInTheDocument();
  });
});
