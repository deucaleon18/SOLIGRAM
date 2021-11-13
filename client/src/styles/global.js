// globalStyles.js
import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;500&display=swap');
*{
    -ms-overflow-style: none;
}
::-webkit-scrollbar {
    display: none;
}
  body {
    background-color:#190029;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
  }

  a{
      text-decoration:none;
  }
  
  button{
      outline:none;
      border:none;
  }
  button:hover{
      transition:400ms ease-in-out;
  }
  
  ul li{
      list-style:none;
  }
  
`;
 
export default GlobalStyle;



