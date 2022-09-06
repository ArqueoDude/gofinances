import 'react-native-gesture-handler';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React, { useEffect, useState, useCallback } from 'react';
import { ThemeProvider } from 'styled-components';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import {
  useFonts,
  Kanit_400Regular,
  Kanit_500Medium,
  Kanit_700Bold
} from '@expo-google-fonts/kanit'

import theme from './src/global/styles/theme'

import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './src/Routes/app.routes';

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
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme= {theme}>
        <NavigationContainer>
          <AppRoutes />
        </NavigationContainer>
      </ThemeProvider>  
    </GestureHandlerRootView>


    </View>
  );
}