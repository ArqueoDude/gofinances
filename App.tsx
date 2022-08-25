import React from 'react';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';

import {
  useFonts,
  FiraMono_400Regular,
  FiraMono_500Medium,
  FiraMono_700Bold
} from '@expo-google-fonts/fira-mono'

import theme from './src/global/styles/theme'

import { Dashboard } from './src/screens/Dashboard';

export default function App() {
  const [fontsLoaded] = useFonts([
    FiraMono_400Regular,
    FiraMono_500Medium,
    FiraMono_700Bold
  ]);

  if(!fontsLoaded){
    return <AppLoading />
  }
  return (
    <ThemeProvider theme= {theme}>
      <Dashboard />
    </ThemeProvider>    
  )
}