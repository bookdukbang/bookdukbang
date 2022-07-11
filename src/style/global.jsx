import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}

    html{
        font-size: 62.5%;
    }

    a{
        text-decoration: none;
        color: inherit;
    }

    body{
        font-size: 1.6rem;
        line-height: 1.4;
        background-color: ${({ theme }) => theme.bgsubColor};
        transition: all 0.2s;
        color: ${({ theme }) => theme.textColor};
        font-family: 'Noto Sans KR', sans-serif;
    }

    input, button{
        font-family: inherit;
        font-size: inherit;
    }

    button{
        cursor: pointer;
    }

    img{
        vertical-align: top;
    }
`;
export default GlobalStyle;
