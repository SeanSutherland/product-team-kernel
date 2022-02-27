import { StatusBar } from 'expo-status-bar';
import React, { useState, Component } from 'react';
import { Button, StyleSheet, Text, View, Image, TouchableOpacity, Touchable } from 'react-native';
import * as Permissions from 'expo-permissions';
import Camera from "expo-camera";
import * as ImagePicker from 'expo-image-picker';
import Header from "./Components/Header";
import Position from 'react-native/Libraries/Components/Touchable/Position';
export default function App() {
  
  const[picture, setPicture] = useState("")  //picture url is in this state
  const[imageOpen, setImageOpen] = useState(false) 
  const[label, setLabel] = useState('Lamp')  //this gets updated when model changes it
  
  const pickFromGallery = async () =>{
    const {granted} = await Permissions.askAsync(Permissions.CAMERA_ROLL)
    if(granted){
        let data = await ImagePicker.launchImageLibraryAsync({
            mediaTypes:ImagePicker.MediaTypeOptions.Images,
            allowsEditing:true,
            aspect:[1,1],
            quality:0.5
        })
        if(!data.cancelled){
          let newfile = { uri:data.uri,
            type:`test/${data.uri.split(".")[1]}`,
            name:`test.${data.uri.split(".")[1]}`
          }
          handleUpload(newfile)
        }
    }else{
      Alert.alert("You need to give permissions")
    }
  }
  const pickFromCamera = async () =>{
    const {granted} = await Permissions.askAsync(Permissions.CAMERA)
    if(granted){
        let data = await ImagePicker.launchCameraAsync({
            mediaTypes:ImagePicker.MediaTypeOptions.Images,
            allowsEditing:true,
            aspect:[1,1],
            quality:0.5
        })
        if(!data.cancelled){
          let newfile = { uri:data.uri,
            type:`test/${data.uri.split(".")[1]}`,
            name:`test.${data.uri.split(".")[1]}`
          }
          handleUpload(newfile)
        }
    }else{
      Alert.alert("You need permissions")
    }
  }
  const handleUpload = (image)=>{
      const data = new FormData()
      data.append('file', image)
      data.append('upload_preset', 'lowerUpper1!')
      data.append("cloud_name", "lowerupper1")
      setImageOpen(true)
      console.log(imageOpen)
      fetch("https://api.cloudinary.com/v1_1/lowerupper1/image/upload", {
        method:"post",
        body:data
      }).then(res=>res.json()).
      then(data=>{
        setPicture(data.url)
        console.log(data)
      })
  } 
  
  return (
    <>
      <View style={imageOpen ? styles.invisible: styles.defaultScreen}>
        <Header title="CV App Template"></Header> 
        <View style={image.container}>
          <Image 
            style={image.logo}
            source={require("./Components/qmindLogo.jpg")}/>
        </View>
        <View style={description.container}>
          <Text style={description.title}>
            Description
          </Text>
          <Text style={description.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend purus nunc, non vulputate mauris mollis cursus. Etiam justo turpis, tincidunt in tellus non, tempus sagittis neque. Nullam non lacus at tellus eleifend dapibus. Curabitur finibus a erat sed commodo. Fusce sed pretium quam. Cras ac tempor enim. Aenean a egestas dui. Donec ullamcorper arcu sit amet nulla feugiat consectetur.
          </Text>
        </View>
        <View style={buttons.screen}>
          <TouchableOpacity style={buttons.button} onPress={() => pickFromCamera()}>
            <Text style={buttons.text}>Take Picture</Text>
          </TouchableOpacity>
        </View>
        <View style={buttons.separate}>
          <TouchableOpacity style={buttons.button} onPress={() => pickFromGallery()}>
            <Text style={buttons.text}>Upload Picture</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={imageOpen ? styles.defaultScreen: styles.invisible}>
        <Header title="Results"></Header> 
        <View style={buttons.separate}>
          <TouchableOpacity style={returnImage.button} onPress={() => setImageOpen(false)}>
            <Text style={buttons.text}>Back</Text>
          </TouchableOpacity>
        </View>
        <Image
          style={returnImage.container}                              
          source={{uri : picture}}
        /> 
        <View style={labelBox.container}>
          <Text style = {labelBox.text}>
            Classification: {label}
          </Text>
        </View>
      </View>
      
    </>
  );
}
const styles = StyleSheet.create({
  defaultScreen: {
    alignContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  active: {
    display: 'flex',
  },
  invisible: {
    display: 'none',
  },
  text: {
    marginTop: 10,
    fontSize: 30,
  },
});
const buttons = StyleSheet.create({
  screen: {
    paddingTop: 60,
    paddingHorizontal: 70
  },
  separate: {
    paddingTop: 25,
    paddingBottom: 25,
    paddingHorizontal: 70
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
});
const image = StyleSheet.create({
  container:{
    paddingTop: 20,
    paddingHorizontal: 20,
    alignContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 100,
    height: 180
  },
});
const returnImage = StyleSheet.create({
  container:{
    paddingTop: 20,
    paddingHorizontal: 20,
    alignContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: '60%'
  },
  button:{
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#DDDDDD",
    padding: 10
  }
});
const labelBox = StyleSheet.create({
  container:{
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#68a0cf',
    borderRadius: 20,
    borderWidth: 10,
    borderColor: '#fff',
  },
  text:{
    fontSize: 25,
    color: '#fff',
    textAlign: 'center',
  }
})
const description = StyleSheet.create({
  container:{
    paddingTop: 10,
    margin: 10,
    alignContent: 'center',
    alignItems: 'center'
  },
  title:{
    fontSize: 20,
    fontWeight: 'bold'
  },
  text:{
    paddingTop: 10,
    fontSize: 16,
  }
})
