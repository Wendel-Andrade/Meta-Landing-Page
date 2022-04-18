import {createGlobalStyle} from 'styled-components'
import BKG1 from '../assets/background-main-1.png'
import BKG2 from '../assets/background-main-2.png'
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
        background: url(${BKG2}) no-repeat 1010px, url(${BKG1}) no-repeat 931px;
        background-size: cover;
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