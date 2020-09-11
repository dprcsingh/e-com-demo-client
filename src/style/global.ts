import { createGlobalStyle } from 'styled-components';
const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap');;

  *,
  *::after,
  *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: inherit;
	}
	*:focus {
    outline: 0;
}
* {
    outline:none;  -webkit-tap-highlight-color: transparent;
    text-decoration:none;
    
}

  html {
		overflow-x: hidden;
		-webkit-text-size-adjust:200%
	}
  body {
        box-sizing: border-box;
        height:100%;
        width:100%;
		font-family:Helvetica, Arial, Helvetica, sans-serif;
	}
`;

export default GlobalStyles;
