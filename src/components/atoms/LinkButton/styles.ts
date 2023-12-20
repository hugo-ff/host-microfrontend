import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.light};

  color: ${(props) => props.theme.colors.dark};
  font-weight: 500;
  letter-spacing: ${(props) => props.theme.spacing.xs};
  text-decoration: none;

  padding: ${(props) => props.theme.spacing.md} ${(props) => props.theme.spacing.lg};
  border: ${(props) => props.theme.border.widthThin} solid transparent;
  border-radius: ${(props) => props.theme.border.radiusLarge};
  cursor: pointer;
  border-color: ${(props) => props.theme.colors.lightGray};

  box-shadow: 0 10px 8px rgba(0, 0, 0, 0.3);
  transition:
    transform 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;

  &:hover,
  &:focus {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);

    &::before {
      top: 0;
    }

    &::after {
      right: 0;
    }
  }

  &::before {
    left: 0;
    top: -100%;
    height: ${(props) => props.theme.border.widthThick};
    width: 100%;
  }

  &::after {
    top: 0;
    right: -100%;
    height: 100%;
    width: ${(props) => props.theme.border.widthThick};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }
`;

export default { LinkButton };
