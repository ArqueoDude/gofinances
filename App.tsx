import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import * as SplashScreen from 'expo-splash-screen';

import {
  useFonts,
  Kanit_400Regular,
  Kanit_500Medium,
  Kanit_700Bold
} from '@expo-google-fonts/kanit'

import theme from './src/global/styles/theme'

import { Dashboard } from './src/screens/Dashboard';

export default function App() {

  SplashScreen.preventAutoHideAsync();

  const [isLoaded] = useFonts([
    Kanit_400Regular,
    Kanit_500Medium,
    Kanit_700Bold,
  ]);

  useEffect(() => {
    const showSplashScreen = async() => {
      await SplashScreen.preventAutoHideAsync();
    };

    showSplashScreen();

  }, []);

  useEffect(() => {
    const hideSplashScreen = async() => {
      await SplashScreen.hideAsync();
    };

    if (isLoaded) hideSplashScreen();
  }, [isLoaded]);

    if (!isLoaded) {
      return null
    };

  return (
    <ThemeProvider theme= {theme}>
      <Dashboard />
    </ThemeProvider>    
  );
}