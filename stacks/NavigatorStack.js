//Navigation-Stack for App

import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Other from '../screens/Other';
import HomeIcon from '../components/Icons/HomeIcon';
import LikeIcon from '../components/Icons/LikeIcon';
import ProfileIcon from '../components/Icons/ProfileIcon';
import HistoryIcon from '../components/Icons/HistoryIcon';

const Tab = createBottomTabNavigator();

export default function NavigatorStack() {
    return (
        <NavigationContainer>
        <Tab.Navigator tabBarOptions={{
              showLabel:false,
              keyboardHidesTabBar:true,
              style:{padding:5,backgroundColor:"#E5E5E5"}
          }}>
          <Tab.Screen name="Home" component={Home} options={{tabBarIcon:()=><HomeIcon/> }}/>
          <Tab.Screen name="Like" component={Other} options={{tabBarIcon:()=><LikeIcon/> }}/>
          <Tab.Screen name="Profile" component={Other}  options={{tabBarIcon:()=><ProfileIcon/> }}/>
          <Tab.Screen name="History" component={Other}  options={{tabBarIcon:()=><HistoryIcon/> }}/>
        </Tab.Navigator>
      </NavigationContainer>
    )
}
