import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import * as Permissions from 'expo-permissions';
import Camera from "expo-camera";
import * as ImagePicker from 'expo-image-picker';

import Header from "./Components/Header";
import Position from 'react-native/Libraries/Components/Touchable/Position';

export default function App() {
  
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
      Alert.alert("You need to give permissions")
    }
  }

  const handleUpload = (image)=>{
      const data = new FormData()
      data.append('file', image)
      data.append('upload_preset', 'lowerUpper1!')
      data.append("cloud_name", "lowerupper1")

      fetch("https://api.cloudinary.com/v1_1/lowerupper1/image/upload", {
        method:"post",
        body:data
      }).then(res=>res.json()).
      then(data=>{
        console.log(data)
        setPicture(data.url)
      })
  } 
  
  return (
    <View>
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
        <Button title='Camera' onPress={() => pickFromCamera()} />
        <Button title='Click to upload' onPress={() => pickFromGallery()} />
     </View>
    </View>
  );
}

const buttons = StyleSheet.create({
  screen: {
    paddingTop: 50,
    paddingHorizontal: 70
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

