import styled from 'styled-components';

const ErrorContainer = styled.div`
  &::after {
    content: '';
    background-color: #0f0f10;
    border-top-left-radius: 50% 100%;
    border-top-right-radius: 50% 100%;
    position: fixed;
    bottom: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    opacity: 0.9;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.6);
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  text-align: center;
  max-width: 60rem;
  margin: 0 auto;

  .error__message {
    text-align: center;
    font-size: ${(props) => props.theme.typography.fontSizeBase};
    line-height: ${(props) => props.theme.lineHeights.normal};
    padding: ${(props) => props.theme.spacing.xl};
    letter-spacing: ${(props) => props.theme.spacing.xs};
    color: ${(props) => props.theme.colors.light};

    &--title {
      text-align: center;
      font-size: 2rem;
      font-weight: ${(props) => props.theme.typography.fontWeightBold};
      line-height: ${(props) => props.theme.lineHeights.normal};
      color: ${(props) => props.theme.colors.light};
      letter-spacing: ${(props) => props.theme.spacing.xs};
    }
  }
`;

export default { ErrorContainer };
