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

  /* === Scrollbar Styles === */
  *::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

*::-webkit-scrollbar-thumb {
  background-color: ${({ theme }) =>
    theme.token.scrollbarThumb || "rgba(0, 0, 0, 0.2)"};
  border-radius: 8px;
  border: 2px solid transparent;
  background-clip: padding-box;
}

*::-webkit-scrollbar-thumb:hover {
  background-color: ${({ theme }) =>
    theme.token.scrollbarThumbHover || "rgba(0, 0, 0, 0.3)"};
}

* {
  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) =>
    `${theme.token.scrollbarThumb || "rgba(0,0,0,0.2)"} transparent`};
}

  html {
    scroll-behavior: smooth;
  }
`;

export default GlobalCSSReset;
