import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Chip, useTheme } from 'react-native-paper'
import LogInHeader from '../../components/LogInHeader'

export default function ShopMoreInformation({ route, navigation }) {
    const theme=useTheme()
    return (
        <LogInHeader title="Shop Details" subtitle="Please describe your shop details" navigation={navigation}>
            <ScrollView>
                {/* <Text>{JSON.stringify(route.params.ids)}</Text> */}
                {
                    route.params.ids.map((id, i) =>
                        <Chip icon={id.icon} mode='outlined' style={{ width: 'auto', display: 'flex', borderColor:theme.colors.primary }}>{id.type}</Chip>
                    )
                }
            </ScrollView>
        </LogInHeader>
    )
}
