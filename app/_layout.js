import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

import { useFonts } from "expo-font";
import { useEffect } from "react";

// Prevent hiding the splash screen
SplashScreen.preventAutoHideAsync();


export default function Layout() {

const [fontsLoaded] = useFonts({
    DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
    DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
    DMRegular: require('../assets/fonts/DMSans-Regular.ttf')
    })
useEffect(() => {
        if (fontsLoaded) {
          // Hide the splash screen after the fonts have loaded and the
          // UI is ready.
          SplashScreen.hideAsync();
        }
      }, [fontsLoaded]);
    
      // Prevent rendering until the font has loaded
      if (!fontsLoaded) {
        return null;
      }
  return <Stack />;
}