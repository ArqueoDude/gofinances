import React, { useEffect, useState, useCallback } from 'react';
import { ThemeProvider } from 'styled-components';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { View } from 'react-native';

import {
  useFonts,
  Kanit_400Regular,
  Kanit_500Medium,
  Kanit_700Bold
} from '@expo-google-fonts/kanit'

import theme from './src/global/styles/theme'

import { CategorySelect } from './src/screens/CategorySelect';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          Kanit_400Regular,
          Kanit_500Medium,
          Kanit_700Bold,
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View
      onLayout={onLayoutRootView}
      style={{
        flex: 1
      }}
    >
     <ThemeProvider theme= {theme}>
        <CategorySelect />
      </ThemeProvider>  
    </View>
  );
}