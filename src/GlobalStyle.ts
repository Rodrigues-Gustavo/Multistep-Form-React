import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #333;
  }

  body {
    background-color: #f9fafc;
  }
`;
 
export default GlobalStyle;