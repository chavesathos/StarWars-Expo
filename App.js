import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Routes } from './src/routes';

import { useFonts, 
         SourceSansPro_400Regular,
         SourceSansPro_600SemiBold,
         SourceSansPro_700Bold, 
         SourceSansPro_900Black 
        } from '@expo-google-fonts/source-sans-pro';
        
import { theme } from "./src/styles"

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
         SourceSansPro_400Regular,
         SourceSansPro_600SemiBold,
         SourceSansPro_700Bold, 
         SourceSansPro_900Black,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
} 

