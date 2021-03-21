import { Layout, TopNavigation } from '@ui-kitten/components'
import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'

export default () => {
  return (
    <>
    <TopNavigation title="Home" />
    <Layout style={{justifyContent:'center',alignItems:'center',flex:1}}>
      <Text>Hello</Text>
    </Layout>
    </>
  )
}
