import React from 'react';
import {View} from "react-native";
import ContactsMenu from '../Components/ContactsMenu';
import Header from '../Components/Header';
import MenuButton from '../Components/MenuButton';



import SearchBar from '../Components/SearchBar';

function Home() {
  return (
    <View>
            
            <Header/>
            <SearchBar/>
            <MenuButton/>
            <ContactsMenu/>
       
    </View>
  )
}

export default Home
