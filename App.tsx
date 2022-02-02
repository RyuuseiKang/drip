import React from 'react';
import styled, {ThemeProvider} from 'styled-components/native';
import {Theme} from '@react-navigation/native';
import useTheme from './hooks/ui/useTheme';
import AppRouter from './AppRouter';
import {Themes} from './styles';

const AppContainer = styled.View<{theme: Themes}>`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;

const App: React.FC = () => {
  const theme: Theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <AppRouter />
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
