import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  body {
    font-family: 'Avenir Next Pro', sans-serif;
  }
  
  p,
  label {
    line-height: 1.5em;
  }

  input, select, button, textarea {
    font-family: inherit;
    font-size: inherit;
  }
`;
