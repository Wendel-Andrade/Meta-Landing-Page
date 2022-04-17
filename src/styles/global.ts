import {createGlobalStyle} from 'styled-components'

const globalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border box;
    }
    html, body, #root {
        height: 100%;
    }
    body {
        background-color: #FDFFF7;
        font-family: 'Ubuntu', sans-serif;
    }
    button {
        background-color: transparent;
        border: none;
        outline: none;
        font-family: 'Ubuntu', sans-serif;
        cursor: pointer;
    }
    a {
        text-decoration: none;
        outline:none;
    }
`;
export default globalStyle;