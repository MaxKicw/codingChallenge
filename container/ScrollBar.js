//Scrollbar for selecting candy category

import React from 'react'
import { View, Text, ScrollView, Animated } from 'react-native'
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

export default function ScrollBar(props) {
    return (
        <ScrollView ref={props.scrollView} contentContainerStyle={{paddingRight:Platform.OS==="android"?100:0}} contentInset={{right:150}} horizontal showsHorizontalScrollIndicator={false} style={{flexDirection:"column",overflow:"scroll",width:vw(100),paddingTop:15,paddingLeft:vw(10)}}>
            <View>
                <View style={{flexDirection:"row"}}>
                    <Text onPress={()=>props.setPage(0)} style={{width:80,margin:5,marginRight:25,fontSize:17,color:props.isActiveTab===0?"#FA4A0C":"#9A9A9D",fontFamily:"textRegular"}}>Haribo</Text>
                    <Text onPress={()=>props.setPage(1)} style={{width:80,margin:5,marginRight:25,fontSize:17,color:props.isActiveTab===1?"#FA4A0C":"#9A9A9D",fontFamily:"textRegular"}}>Trolli</Text>
                    <Text onPress={()=>props.setPage(2)} style={{width:80,margin:5,marginRight:25,fontSize:17,color:props.isActiveTab===2?"#FA4A0C":"#9A9A9D",fontFamily:"textRegular"}}>Hitschler</Text>
                    <Text onPress={()=>props.setPage(3)} style={{width:80,margin:5,marginRight:25,fontSize:17,color:props.isActiveTab===3?"#FA4A0C":"#9A9A9D",fontFamily:"textRegular"}}>Nimm 2</Text>
                </View>
                <View style={{width:vw(80),alignItems:"center",flexDirection:"row"}}>
                    <Animated.View style={{width:80,height:3,backgroundColor:"#FA4A0C",borderRadius:2,transform:[{ translateX: props.leftPadding }]}}></Animated.View>
                </View>
            </View>
        </ScrollView>
    )
}
