import { createGlobalStyle } from "styled-components";
// import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    outline:0;
    padding: 0;
  }
  body {
    box-sizing: border-box;
    margin: 0;
    outline:0;
    padding: 0;
    font-size: 16px;
  }
`;

export default GlobalStyles;
