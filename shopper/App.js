import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import shopperAxios from './components/axios'


export default function App() {
  const [time, setTime] = useState('')
  useEffect(() => {
    shopperAxios.get("").then(response => {
      console.log(response.data);
      setTime(response.data.now)
    })
  }, [])
  return (
    <SafeAreaView>
      <Text>{time}</Text>
    </SafeAreaView>
  )
}
