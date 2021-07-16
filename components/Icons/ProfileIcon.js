//Icon for Tab -> Prepared for animated icon if so

import React from 'react'
import { useIsFocused } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileIcon() {

  const isInFocus = useIsFocused();

  if(isInFocus){
    return (
        <Ionicons name="person" size={24} color="#FA4A0C" style={{shadowColor: '#FA4A0C',shadowOpacity: 0.5,shadowRadius: 5, shadowOffset: {width: 0,height: 1,}}}/>
    )
  }else{
    return (
        <Ionicons name="person-outline" size={24} color="#ADADAF" />
    )
  }
}
