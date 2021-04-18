/**
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react'
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-native-paper'
import { Provider as ReduxProvider } from 'react-redux'
import store from './store';


export default function Main() {
    return <NavigationContainer>
        <ReduxProvider store={store}>
            <Provider>
                <App />
            </Provider>
        </ReduxProvider>
    </NavigationContainer>
}

AppRegistry.registerComponent(appName, () => Main);
