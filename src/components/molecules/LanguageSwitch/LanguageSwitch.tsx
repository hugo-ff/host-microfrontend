import { ChangeEvent } from 'react';

import { Switch } from '../../atoms/Switch';
import styled from './styles';

interface LanguageSwitchProps {
  toggled: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const LanguageSwitch: React.FC<LanguageSwitchProps> = ({ toggled, onChange }) => {
  const spain = 'https://unpkg.com/i18n-switch@2.0.1/assets/spain.png';
  const usa = 'https://unpkg.com/i18n-switch@2.0.0/assets/united-states.png';

  return (
    <styled.LanguageSwitch>
      <img src={usa} alt="spanish language" />
      <Switch id="language-switch" toggled={toggled} onChange={onChange} />
      <img src={spain} alt="english language" />
    </styled.LanguageSwitch>
  );
};
