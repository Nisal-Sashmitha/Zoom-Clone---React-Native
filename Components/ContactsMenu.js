import React, { useState, useEffect } from "react";
import {View, Text, StyleSheet, Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';


function ContactsMenu() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [users,setUsers] = useState([]);

  const fetchData = async () => {
    const resp = await fetch("https://randomuser.me/api/?results=3");
    const data = await resp.json();
    setData(data);
    setLoading(false);
   
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if(!loading){
      setUsers(
        ()=>{
          let arr = data['results'].map((user)=>({
          type:"contact",
          name:user.name.first+" "+user.name.last,
          photo:user.picture.thumbnail
        }))
        arr.unshift({type:"starred",name:"starred"});
        return arr;
      }
      )
     
    }
    
   
  }, [loading,]);

  return (
    <View style={styles.container}>
      {loading && <Text style={styles.text}>Loading..</Text>}
      
      
      {users && users.map(((user,index)=>
        <View key={index} style={styles.row}>
        {/*image */}
        {user.type == "starred" ? (
          <View style={styles.starredIcon}>
            <AntDesign name="star" size={30} color="#efefef"/>
          </View>) :(
          <Image source={{
            uri: user.photo,
          }} style={styles.image}/>)

        }
        
        {/*image text */}
        <Text style={styles.text}>
          {user.name}
        </Text>

      </View>
        ))}
    </View>
  )
}

export default ContactsMenu

const styles = StyleSheet.create({
  row:{
    flexDirection:"row",
    marginTop:20,
    alignItems:"center",
  },
  starredIcon:{
    backgroundColor:"#333333",
    width: 55,
    height: 55,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:20,
  },
  text:{
    color:"white",
    paddingLeft:15,
    fontSize:18,
  },
  image:{
    width:55,
    height:55,
    borderRadius:20,
  }

})
