import React, { useState } from 'react';
import Container from './components/container/Container';
import GlobalStyles from './style/global';
import { ViewPortProvider } from './context/viewPortContext';
import Routes from './routes/routes';
import { ThemeContext } from 'styled-components';
import getTheme from './style/theme';

function App() {
  const [themeValue, setTheme] = useState('light');
  const handleToggleTheme = () => {
    themeValue === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ViewPortProvider>
      <ThemeContext.Provider
        value={{
          theme: getTheme(themeValue),
          themeValue,
          setTheme: handleToggleTheme,
        }}
      >
        <Container>
          <Routes />
          <GlobalStyles />
        </Container>
      </ThemeContext.Provider>
    </ViewPortProvider>
  );
}

export default App;
