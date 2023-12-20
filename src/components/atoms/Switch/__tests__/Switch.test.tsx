import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Switch } from '../Switch';

describe('Switch', () => {
  it('should render without errors', () => {
    const onChangeFn = jest.fn();
    render(<Switch id="mySwitch" toggled={false} onChange={onChangeFn} />);

    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('should change its state when user clicks', async () => {
    let toggled = false;
    const onChange = () => {
      toggled = !toggled;
    };

    render(<Switch id="mySwitch" toggled={toggled} onChange={onChange} />);

    const switchButton = screen.getByRole('checkbox');

    await userEvent.click(switchButton);

    expect(toggled).toBeTruthy();
  });
});
