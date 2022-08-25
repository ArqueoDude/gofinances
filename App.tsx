import React from 'react';
import { ThemeProvider } from 'styled-components';
import * as SplashScreen from 'expo-splash-screen';

import {
  useFonts,
  FiraMono_400Regular,
  FiraMono_500Medium,
  FiraMono_700Bold
} from '@expo-google-fonts/fira-mono'

import theme from './src/global/styles/theme'

import { Dashboard } from './src/screens/Dashboard';

export default function App() {

  SplashScreen.preventAutoHideAsync();

  const fontLoaded = useFonts([
    FiraMono_400Regular,
    FiraMono_500Medium,
    FiraMono_700Bold
  ]);

  if (!fontLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme= {theme}>
      <Dashboard />
    </ThemeProvider>    
  );
}