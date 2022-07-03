import React from 'react';
import {SafeAreaView, StyleSheet,View,  Platform, StatusBar} from "react-native";
import ContactsMenu from '../Components/ContactsMenu';
import Header from '../Components/Header';
import MenuButton from '../Components/MenuButton';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import SearchBar from '../Components/SearchBar';

function Home({ navigation }) {
  return (
    <View style={styles.container}>
          <SafeAreaView style={styles.AndroidSafeView}>
            <Header/>
            <SearchBar/>
            <MenuButton navigation={navigation}/>
            <ContactsMenu/>
          </SafeAreaView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#1c1c1c",
    padding:15
  },
  AndroidSafeView:{
    paddingTop: Platform.OS == "android" ? (StatusBar.currentHeight) :0,
    height:'100%'
  }
})