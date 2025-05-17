import { createGlobalStyle } from "styled-components";

const GlobalCSSReset = createGlobalStyle`
  *,
  *::before,
  *::after {
    border: none;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  img {
    display: block;
    max-width: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    background: none;
    cursor: pointer;
  }

  ul,
  li {
    list-style: none;
  }

  p {
    
  }
 
`;

export default GlobalCSSReset;
