import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './pages/Welcome';
import ShopInformation from './pages/ShopRegister/ShopInformation';
import { useSelector } from 'react-redux';
import ShopMoreInformation from './pages/ShopRegister/ShopMoreInformation';

export default function App() {
  const Stack = createStackNavigator();
  const loggedIn = useSelector(state => state.loggedIn)

  return (
    // loggedIn ?
    // <Text>gf</Text>:
    <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="ShopInformation" component={ShopInformation} />
      <Stack.Screen name="ShopMoreInformation" component={ShopMoreInformation} />
    </Stack.Navigator>



  )
}
