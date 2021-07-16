//Universal Header Component

import React from 'react'
import { View, Text } from 'react-native'
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import { FontAwesome,Ionicons } from '@expo/vector-icons';

export default function Header() {
    return (
        <View style={{width:vw(80),height:vh(10),justifyContent:"space-between",alignItems:"center",flexDirection:"row"}}>
            <FontAwesome name="bars" size={24} color="black" />
            <Ionicons name="md-cart-outline" size={24} color="#9A9A9D" />
        </View>
    )
}
