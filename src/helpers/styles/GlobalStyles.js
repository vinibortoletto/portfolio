import * as styled from 'styled-components';
import { vars } from './variables';
import { Reset } from './reset';

export const GlobalStyles = styled.createGlobalStyle`
  ${Reset}

  body {
    margin: auto;
    font-family: ${vars.fontFamily.regular};
    color: ${vars.color.gold};
    background-color: ${vars.color.darkGreen};
  }

  ::selection {
    color: ${vars.color.darkGreen};
    background: ${vars.color.lightGreen};
  }
`;
