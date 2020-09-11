import React, { useState } from 'react';
import Container from './components/container/Container';
import GlobalStyles from './style/global';
import Routes from './router/Routes';
import { ViewPortProvider } from './context/viewPortContext';
import { ThemeContext } from 'styled-components';
import getTheme from './style/theme';
import { ApolloProvider } from '@apollo/client';
import client from './client';

function App() {
  const [themeValue, setTheme] = useState('light');
  const handleToggleTheme = () => {
    themeValue === 'light' ? setTheme('dark') : setTheme('light');
  };
  return (
    <ApolloProvider client={client}>
      <ViewPortProvider>
        <ThemeContext.Provider
          value={{
            theme: getTheme(themeValue),
            themeValue,
            setTheme: handleToggleTheme,
          }}
        >
          <Container theme={getTheme(themeValue)}>
            <Routes />
          </Container>
        </ThemeContext.Provider>
        <GlobalStyles />
      </ViewPortProvider>
    </ApolloProvider>
  );
}

export default App;
