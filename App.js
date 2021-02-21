import React, { useState} from 'react';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';
import Navigator from './routes/drawer';


export default function App() {

  let [fontsLoaded] = useFonts({
    Inter_900Black,
    'nunito-bold':require('./assets/fonts/Nunito-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <Navigator />;
}
