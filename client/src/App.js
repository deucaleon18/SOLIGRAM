import React,{useEffect} from "react";
import { ThemeProvider } from "styled-components";
import Routing from "./Routing";
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import GlobalStyle from "./styles/global";
import {lightTheme,darkTheme,defaultTheme} from "./styles/theme"
import {devices} from './styles/devices'

import useDarkTheme from "./hooks/useDarkTheme";

const App = () => {
   const [theme, themeToggler] = useDarkTheme();
   const selectedTheme = theme === "light" ? lightTheme : darkTheme;
   useEffect(()=>{
     console.log(selectedTheme)
   })
  return (
    <div className="app">
      <ThemeProvider
        theme={selectedTheme}
        devices={devices}
        defaultTheme={defaultTheme}
      >
        <GlobalStyle />
       
          <Navbar themeToggler={themeToggler} />
        
        <Routing />
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default App;
