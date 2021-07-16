//Icon for Tab -> Prepared for animated icon if so

import React from 'react'
import { useIsFocused } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

export default function LikeIcon() {
  const isInFocus = useIsFocused();

  if(isInFocus){
    return (
        <Feather name="heart" size={24} color="#FA4A0C" style={{shadowColor: '#FA4A0C',shadowOpacity: 0.5,shadowRadius: 5, shadowOffset: {width: 0,height: 1,}}}/>
    )
  }else{
    return (
        <Feather name="heart" size={24} color="#ADADAF" />
    )
  }
}
