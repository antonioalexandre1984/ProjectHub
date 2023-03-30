import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
}

body{
    background:#0e1129;
    color: #d4f5f5;
    -webkiy-font-smoothing: antialiased;
}

body,input-security,textarea,button{
  font-family: 'Roboto Condensed', serif;
  font-weight: 400;
}

h1,h2,h3,h4,h5,h6,strong{
  font-weight: 500;
}

button{
  cursor: pointer;
}

a{
  text-decoration: none;
}

ul,li{
  list-style: none;
}

input{
  border: none;
  background: none;
}

`;