//Conifgurable ProductCard

import React,{useRef,useEffect} from 'react'
import { View, Text,Image } from 'react-native'
import LottieView from 'lottie-react-native';

export default function ProductCard(props) {

    const animation = useRef();

    useEffect(() => {
        if(props.sale){
            animation.current.play();
        }
    }, [])

    return (
        <View style={{width:170,backgroundColor:"white",height:220,borderRadius:30,marginRight:25,marginTop:25,alignItems:"center",shadowColor: '#393939',shadowOpacity: 0.1,shadowRadius: 5, shadowOffset: {width: 0,height:1}}}>
            <Image source={props.uri} style={{width: 150,height:150,position:"absolute",top:-40}} resizeMode="contain"/>
            {props.sale && <LottieView ref={animation} style={{width: 100,height: 100,position:"absolute",top:-25,left:20}} source={require('../../assets/animations/sale.json')}/>}
            <View style={{height:140}}></View>
            <Text style={{fontFamily:"roundBold",fontSize:18}}>{props.title}</Text>
            <Text style={{fontFamily:"roundBold",color:"#FA4A0C"}}>{props.price}</Text>
        </View>
    )
}
