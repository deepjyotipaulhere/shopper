/**
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react'
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';

export default function Index(){
    return <ApplicationProvider {...eva} theme={eva.light}><App /></ApplicationProvider>
}

AppRegistry.registerComponent(appName, () => Index);
