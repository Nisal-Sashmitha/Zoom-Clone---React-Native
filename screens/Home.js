import React from 'react';
import {SafeAreaView, StyleSheet,View,  Platform, StatusBar} from "react-native";
import ContactsMenu from '../Components/ContactsMenu';
import Header from '../Components/Header';
import MenuButton from '../Components/MenuButton';



import SearchBar from '../Components/SearchBar';

function Home() {
  return (
    <View style={styles.container}>
          <SafeAreaView style={styles.AndroidSafeView}>
            <Header/>
            <SearchBar/>
            <MenuButton/>
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