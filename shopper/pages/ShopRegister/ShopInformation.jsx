import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import shopperAxios from '../../components/axios'
import LogInHeader from '../../components/LogInHeader'
import { Button, Checkbox, Headline, useTheme } from 'react-native-paper';
import { ListItem } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ShopInformation({ navigation }) {
    const [categories, setCategories] = useState([])
    const [selectedCats, setSelectedCats] = useState([])
    const [loading, setLoading] = useState(true)

    const theme=useTheme()

    useEffect(() => {
        shopperAxios.get("shop/getcategory").then(response => {
            setCategories(response.data)
        }).then(() => {
            setLoading(false)
        })
    }, [])
    return (
        <LogInHeader title="Select your shop's category" navigation={navigation} subtitle="Please select 1 or more categories">
            <View>
                <Headline style={{ fontWeight: 'bold', textAlign: 'center', padding: 10 }}>Shop Categories</Headline>
                <ScrollView>
                    {
                        !loading && categories.map((cat, i) =>
                            <ListItem key={i} onPress={() => {
                                console.log(selectedCats.length);
                                if (!selectedCats.includes(cat))
                                    setSelectedCats([...selectedCats, cat])
                                else {
                                    setSelectedCats(selectedCats.filter((c, x) => c != cat))
                                }
                            }}>
                                <ListItem.CheckBox checked={selectedCats.includes(cat)} uncheckedIcon={<MaterialCommunityIcons name='checkbox-blank-circle-outline' size={30} color='primary' />} checkedIcon={<MaterialCommunityIcons name='checkbox-marked-circle' size={30} color={theme.colors.primary} />} />
                                <MaterialCommunityIcons name={cat.icon} color={selectedCats.includes(cat) ? theme.colors.primary : 'gray'} size={30} />
                                <ListItem.Title>{cat.type}</ListItem.Title>
                            </ListItem>
                        )
                    }
                </ScrollView>
                <Button mode='contained' style={{ marginTop: 20 }} disabled={selectedCats.length == 0} onPress={() => {
                    navigation.navigate("ShopMoreInformation", {
                        ids: selectedCats
                    })
                }}>Next</Button>
            </View>
        </LogInHeader>
    )
}
