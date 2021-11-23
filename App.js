import React, { useState } from 'react';
import { useFonts } from 'expo-font';
import Router from './navigation/Router';
import { ThemeContext } from './context/ThemeProvider';

export default function App() {

  const [theme, setTheme] = useState("dark");

  const data = {
    theme,
    setTheme,
  }

  const [loaded] = useFonts({
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Light': require('./assets/fonts/Poppins-Light.ttf'),
  })

  if (!loaded) {
    return null;
  }

  return (
    <ThemeContext.Provider value={data}>
      <Router />
    </ThemeContext.Provider>

  );
}

