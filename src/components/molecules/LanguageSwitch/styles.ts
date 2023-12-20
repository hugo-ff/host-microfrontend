import styled from 'styled-components';

const LanguageSwitch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 30px;
    width: 30px;

    &:first-of-type {
      margin-right: ${(props) => props.theme.spacing.xs};
    }

    &:last-of-type {
      margin-left: ${(props) => props.theme.spacing.sm};
    }
  }
`;

export default { LanguageSwitch };
