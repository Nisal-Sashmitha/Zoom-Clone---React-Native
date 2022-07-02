import React from 'react';
import { View ,Text, StyleSheet,TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const items = [
  {
      id:1,
      name:"video-camera",
      title:"New Meeting",
      customColor:"orange"
  },
  {
      id:2 ,
      name:"plus-square",
      title:"Shedule",
    
  },
  {
      id:3,
      name:"calendar",
      title:"Shedule",
   
  },
  {
      id:4,
      name:"upload",
      title:"Share Screen",
    
  }
]

function MenuButton() {
  return (
    <View style={styles.container}>
      {items.map((item, index)=>
        <View key={index} style={styles.buttonContainer}>
          <TouchableOpacity style={{...styles.button,
            backgroundColor: item.customColor ? item.customColor:"#0470DC"
          }}>
            
            <FontAwesome name={item.name} size={23} color={"#efefef"}/>
        
          </TouchableOpacity>
          <Text style={styles.menuText}>{item.title}</Text>
        </View>
        )}
        
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
    backgroundColor:'blue',
    borderRadius:15,
    justifyContent:'center',
    alignItems:'center'
  },
  buttonContainer:{
    alignItems:'center',
    flex:1,
  },
  menuText:{
    color:'#858585',
    fontSize:12,
    paddingTop:10,
    fontWeight:'600'
  }
})