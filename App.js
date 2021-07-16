//Root of app 

import React from 'react';
import NavigatorStack from './stacks/NavigatorStack';
import { useFonts } from 'expo-font';

export default function App() {

  //font-loading
  const [loaded] = useFonts({
    'roundBold':require('./assets/fonts/SF-Pro-Rounded-Bold.otf'),
    'roundRegular':require('./assets/fonts/SF-Pro-Rounded-Regular.otf'),
    'textRegular':require('./assets/fonts/SF-Pro-Text-Regular.otf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigatorStack/>
  );
}
