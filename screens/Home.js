import React from 'react';
import {View} from "react-native";
import { Header } from 'react-native/Libraries/NewAppScreen';
import SearchBar from '../Components/SearchBar';

function Home() {
  return (
    <View>
      <Header/>
      <SearchBar/>
    </View>
  )
}

export default Home
