import React from 'react';
import { View ,Text, StyleSheet,TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function MenuButton() {
  return (
    <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            
            <FontAwesome name={'video-camera'} size={23} color={"#efefef"}/>
        
          </TouchableOpacity>
          <Text style={styles.menuText}>New Meeting</Text>
        </View>
        <View style={styles.buttonContainer}></View>
        <View style={styles.buttonContainer}></View>
        <View style={styles.buttonContainer}></View>
    </View>
  )
}

export default MenuButton

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding:10,
    marginTop:15,
    borderBottomColor:'#1f1f1f',
    borderBottomWidth:1
    },
  button:{
    width:50,
    height:50,
    backgroundColor:'orange',
    borderRadius:15,
    justifyContent:'center',
    alignItems:'center'
  },
  buttonContainer:{
    alignItems:'center'
  },
  menuText:{
    color:'#858585',
    fontSize:12,
    paddingTop:10,
    fontWeight:'600'
  }
})