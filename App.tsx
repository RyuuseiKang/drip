import React from 'react';
import styled, {ThemeProvider} from 'styled-components/native';
import {Theme} from '@react-navigation/native';
import useTheme from './hooks/ui/useTheme';
import AppRouter, {ScreenParamList} from './AppRouter';

const App: React.FC = () => {
  const theme: Theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  );
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends ScreenParamList {}
  }
}

export default App;
