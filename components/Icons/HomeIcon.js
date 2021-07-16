//Icon for Tab -> Prepared for animated icon if so

import React from 'react'
import { useIsFocused } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';

export default function HomeIcon() {
  const isInFocus = useIsFocused();

  if(isInFocus){
    return (
        <Entypo name="home" size={24} color="#FA4A0C" style={{shadowColor: '#FA4A0C',shadowOpacity: 0.5,shadowRadius: 5, shadowOffset: {width: 0,height:1}}}/>
    )
  }else{
    return (
     <Entypo name="home" size={24} color="#ADADAF" style={{shadowColor: '#FA4A0C',shadowOpacity: 0,shadowRadius: 0, shadowOffset: {width: 0,height: 0}}}/>
    )
  }
}
