
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Home from './Home';
import MeetingRoom from './MeetingRoom';

const Stack = createNativeStackNavigator();
function Navigations() {
    
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerTitleAlign: 'center'}}>
        <Stack.Screen name="Home" component={Home} options={{
            headerShown:false
        }}/>
        <Stack.Screen name="MeetingRoom" component={MeetingRoom} options={{
            title:"Start a Meeting",
            headerStyle:{
                backgroundColor:"#1c1c1c",
                
            },
            headerTintColor:"white"
           
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigations
