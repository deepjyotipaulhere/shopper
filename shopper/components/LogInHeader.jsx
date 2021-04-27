import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import { Appbar } from 'react-native-paper'

export default function LogInHeader({ title, subtitle, children, showBack = true, navigation = null }) {
    return (
        <>
            <StatusBar barStyle='light-content' />
            <Appbar.Header>
                {showBack && <Appbar.BackAction onPress={navigation && navigation.goBack} />}
                <Appbar.Content title={title} subtitle={subtitle} />
            </Appbar.Header>
            {children}
        </>
    )
}
