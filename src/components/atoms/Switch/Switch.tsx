import { ChangeEvent } from 'react';

import styled from './styles';

interface SwitchProps {
  id: string;
  toggled: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Switch: React.FC<SwitchProps> = ({ id, toggled, onChange }) => (
  <>
    <styled.SwitchInput
      className="switch"
      id={id}
      type="checkbox"
      checked={toggled}
      onChange={onChange}
    />
    <styled.SwitchLabel className="switch__label" htmlFor={id}>
      <styled.SwitchButton role="checkbox" className="switch__button" />
    </styled.SwitchLabel>
  </>
);
