import React from 'react';
import { useRouteError } from 'react-router-dom';

import { useHostTranslation } from '../../../hooks/useHostTranslation';
import { LinkButton } from '../../atoms/LinkButton/LinkButton';
import styled from './styles';

export const Error: React.FC = () => {
  const t = useHostTranslation();
  const error = useRouteError();
  console.error(error);

  return (
    <styled.ErrorContainer>
      <div className="error__message">
        <p className="error__message--title">{t('ERROR_MESSAGE_TITLE')}</p>
        <p className="error__message--description">{t('ERROR_MESSAGE_DESCRIPTION')}</p>
      </div>
      <LinkButton to={'/'}>{t('ERROR_MESSAGE_CTA')}</LinkButton>
    </styled.ErrorContainer>
  );
};
