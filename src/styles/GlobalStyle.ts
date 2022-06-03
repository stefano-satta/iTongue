import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');

    :root {
        --color-primary: #f89776;
        --color-secondary: #c0d8fb;
        --color-white: #fff;
        --color-black: #000;
        --color-base-text: #343645;
    }

    body {
        margin: 0;
        padding: 0;
        font-size: 16px;
        font-family: 'Poppins', sans-serif;
        color: var(--color-base-text);
        font-weight: 400;
        height: 100%;
    }
    main {
        min-height: 100%;
        margin: 0 auto -50px;
    }
`