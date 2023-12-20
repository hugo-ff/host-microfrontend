import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { useHostTranslation } from '../../../hooks/useHostTranslation';
import useSwitchLanguage from '../../../hooks/useSwitchLanguage';
import { LinkButton } from '../../atoms/LinkButton/LinkButton';
import { LanguageSwitch } from '../../molecules/LanguageSwitch/LanguageSwitch';
import styled from './styled';

export const Host = () => {
  const t = useHostTranslation();
  const [language, setLanguage] = useState('en');
  const [toggleLanguage, setToggleLanguage] = useState(false);
  const { switchAllLanguages } = useSwitchLanguage();

  const onChangeLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'es' : 'en'));
    setToggleLanguage(!toggleLanguage);
  };

  useEffect(() => {
    void switchAllLanguages(language);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  return (
    <styled.Host>
      <div className="language-switch">
        <div className="language-switch__container">
          <LanguageSwitch onChange={onChangeLanguage} toggled={toggleLanguage} />
        </div>
      </div>
      <div className="host">
        <h1 className="host__title">{t('TITLE')}</h1>
        <p className="host__description">{t('DESCRIPTION')}</p>
        <div className="host__buttons-container">
          <LinkButton to={`movie`}>Harry Potter</LinkButton>
          <LinkButton to={`tvshow`}>Rick & Morty</LinkButton>
        </div>
      </div>
      <Outlet />
    </styled.Host>
  );
};
