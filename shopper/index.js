/**
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react'
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { NavigationContainer } from '@react-navigation/native';
import { DefaultTheme,Provider } from 'react-native-paper'
import { Provider as ReduxProvider } from 'react-redux'
import store from './store';

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#1d44b8',
      accent: '#f1c40f',
    },
  };
  
  

export default function Main() {
    return <NavigationContainer>
        <ReduxProvider store={store}>
            <Provider theme={theme}>
                <App />
            </Provider>
        </ReduxProvider>
    </NavigationContainer>
}

AppRegistry.registerComponent(appName, () => Main);
