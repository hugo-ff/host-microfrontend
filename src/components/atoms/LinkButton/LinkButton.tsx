import { FC } from 'react';

import styled from './styles';

interface LinkButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  to: string;
}

export const LinkButton: FC<LinkButtonProps> = ({ children, variant = 'primary', to }) => {
  const props = {
    variant,
  };

  return (
    <styled.LinkButton to={to} {...props}>
      {children}
    </styled.LinkButton>
  );
};
