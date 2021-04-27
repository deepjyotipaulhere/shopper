import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, Image } from 'react-native'
import { Appbar, Button, Card } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import shopperAxios from '../components/axios'
import LogInHeader from '../components/LogInHeader.jsx'
import shopperStore, { shopperActions } from '../store'



export default function Welcome({navigation}) {
  const [time, setTime] = useState('')
  const loggedIn = useSelector(state => state.loggedIn)
  const dispatch = useDispatch();

  const checkLoggedIn = () => {
    dispatch(shopperActions.signOut())

  }

  useEffect(() => {
    checkLoggedIn()
    shopperAxios.get("").then(response => {
      console.log(response.data);
      setTime(response.data.now)
    })
    console.log(loggedIn);
  }, [])
  return (
    <>
      {/* <LogInHeader title="Welcome to Shopper" showBack={false}> */}
        {
          loggedIn ?
            <Text>{time}</Text>
            :
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Image style={{ width: 100, height: 100 }} source={{ uri: 'https://thumbs.dreamstime.com/b/black-white-shopper-hand-written-word-text-typography-logo-icon-design-iocn-color-can-be-used-branding-card-147084484.jpg' }} />
              <Button mode='contained'>Register as Buyer</Button>
              <Button style={{ marginTop: 20 }} onPress={()=>navigation.navigate("ShopInformation")}>Register as Shop Owner</Button>
            </View>
        }
      {/* </LogInHeader> */}
    </>
  )
}
