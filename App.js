import { StatusBar } from 'expo-status-bar';

import { SplashScreen } from './src/screens/SplashScreen';

import { useFonts, 
         SourceSansPro_400Regular,
         SourceSansPro_600SemiBold,
         SourceSansPro_700Bold, 
         SourceSansPro_900Black 
        } from '@expo-google-fonts/source-sans-pro';

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
    <SplashScreen /> 
  );
}

