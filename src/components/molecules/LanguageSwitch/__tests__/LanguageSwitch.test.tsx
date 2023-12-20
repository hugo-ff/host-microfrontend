import userEvent from '@testing-library/user-event';

import { render, screen } from '../../../../tests/test-utils';
import { LanguageSwitch } from '../LanguageSwitch';

describe('Switch', () => {
  it('should render without errors', () => {
    const onChangeFn = jest.fn();
    render(<LanguageSwitch toggled={false} onChange={onChangeFn} />);

    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('should change its state when user clicks', async () => {
    let toggled = false;
    const onChange = () => {
      toggled = !toggled;
    };

    render(<LanguageSwitch toggled={toggled} onChange={onChange} />);

    const switchButton = screen.getByRole('checkbox');

    await userEvent.click(switchButton);

    expect(toggled).toBeTruthy();
  });
});
