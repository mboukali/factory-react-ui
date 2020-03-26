import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    body, h1, h2, h3, h4, h5, h6, p, ol, ul {
        margin: 0;
        padding: 0;
        font-weight: normal;
    }

    ol, ul {
        list-style: none;
    }

    img {
        max-width: 100%;
        height: auto;
    }

    html {
        font-family: ${({ theme }) => theme.fonts.sans};
        font-size: ${({ theme }) => theme.fontSizes.body};;
        box-sizing: border-box;
    }

`;

export default GlobalStyle;