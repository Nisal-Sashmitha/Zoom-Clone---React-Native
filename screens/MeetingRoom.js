import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity, Alert, SafeAreaView } from 'react-native';
import StartMeeting from '../Components/StartMeeting';
import { io } from "socket.io-client";
import { Camera } from 'expo-camera';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Dimensions , StatusBar } from 'react-native';

let socket;
const menuIcon =[
  {
    id:1,
    name:"microphone",
    title:'Mute',
  },
  {
    id:2,
    name:"video-camera",
    title:"Stop Video",
  },
  {
    id: 3,
    name: "upload",
    title: "Share Content"
  },
  {
    id: 4,
    name: "group",
    title: "Participants"
  }
]

function MeetingRoom() {
const [name, setName ] = useState();
const [roomId, setRoomId] = useState();
const [activeUsers,setActiveUsers] = useState([]);
const [startCamera,setStartCamera] =useState(false );
//const [type, setType] = useState(CameraType.back);

const startCameraFunc =async ()=>{
  const {status} = await Camera.requestCameraPermissionsAsync();
  if(status === 'granted'){
    setStartCamera(true);
  } else{
    Alert.alert("Access denied");
  }
};
const joinRoom = ()=>{
  startCameraFunc();
  socket.emit('join-room', {roomId: roomId, userName:name});

}

useEffect(()=>{
  
  socket = io('https://0cf3-2402-4000-21c1-e309-9cde-a270-20f2-e5b6.in.ngrok.io');
  socket.on('connection', ()=>console.log("connected"));
  socket.on('all-users', users =>{
    console.log("Active Users");
    
    //users = users.filter((user)=>(user.userName!= name));
    console.log(users);
    setActiveUsers(users)
  })
}, [])

  return (
    <View style={styles.container}>
      {startCamera ? (
          <SafeAreaView style={styles.AndroidSafeArea}>
            <View style={styles.cameraContainer}>
              <Camera style={{width:activeUsers.length<= 1 ?"100%":200,
               height:activeUsers.length<= 1 ? 600 : 250}} type={'front'}>
              
              </Camera>
              {activeUsers.filter((user)=>(user.userName != name)).map((user,index)=>
                <View key={index} style={styles.activeUserContainer}>
                  <Text style={{color:"white"}}>{user.userName}</Text>
                </View>
              )} 
            </View>
            
            <View style={styles.menu}>
              {
                menuIcon.map((icon, index)=>
                <TouchableOpacity key={index} style={styles.tile}>
                  <FontAwesome name={icon.name} size={22} color={"#efefef"}/>
                  <Text style={styles.textTile}>{icon.title}</Text>
                </TouchableOpacity>)
              }
              
            </View>

          </SafeAreaView>
        ) : (
        <StartMeeting name={name} setName={setName}
        roomId={roomId}
        setRoomId={setRoomId}
        joinRoom={joinRoom}
      />
      )}
        
    </View>
  )
}

export default MeetingRoom

const styles = StyleSheet.create({
    container:{
      backgroundColor: "#1c1c1c",
      flex:1,

    },
    tile:{
      justifyContent:'center',
      alignItems:'center',
      height:50,
      marginTop:15,
      width:90

    }
    ,textTile:{
      color:'white',
      fontSize:12,
      marginTop:10,
    },
    menu:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-around'
    },
    cameraContainer:{
     
      flex:1,
      backgroundColor:'black',
      justifyContent:'center',
      flexDirection:"row",
      flexWrap:'wrap',
      alignContent:'center',

    },
    AndroidSafeArea: {
      flex: 1,
      paddingBottom: Platform.OS === "android" ? (Dimensions.get('screen').height-(Dimensions.get('window').height+StatusBar.currentHeight +40)) : 0
    },
    activeUserContainer:{
      borderColor:"gray",
      borderWidth:1,
      height:250,
      width:200,
      justifyContent:'center',
      alignItems:'center'

    }
})
