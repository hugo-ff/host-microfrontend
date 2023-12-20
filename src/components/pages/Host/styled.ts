import styled from 'styled-components';

const Host = styled.section`
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

  .language-switch {
    position: sticky;
    top: ${(props) => props.theme.spacing.sm};

    &__container {
      position: absolute;
      content: '';
      right: ${(props) => props.theme.spacing.md};
      z-index: 10;
    }
  }

  .host {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 60rem;
    margin: 0 auto;
    padding-top: 8rem;

    &__title {
      text-align: center;
      font-size: 3rem;
      font-weight: ${(props) => props.theme.typography.fontWeightBold};
      line-height: ${(props) => props.theme.lineHeights.normal};
      color: ${(props) => props.theme.colors.light};
      letter-spacing: ${(props) => props.theme.spacing.xs};
    }

    &__description {
      text-align: center;
      font-size: ${(props) => props.theme.typography.fontSizeBase};
      line-height: ${(props) => props.theme.lineHeights.normal};
      padding: ${(props) => props.theme.spacing.xl};
      letter-spacing: ${(props) => props.theme.spacing.xs};
      color: ${(props) => props.theme.colors.light};
    }

    &__buttons-container {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: ${(props) => props.theme.spacing.xl};
    }
  }
`;

export default { Host };
