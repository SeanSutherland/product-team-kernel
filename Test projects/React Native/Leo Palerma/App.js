import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import * as Permissions from 'expo-permissions';
import Camera from "expo-camera";
import * as ImagePicker from 'expo-image-picker';

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
    <View style={styles.container}>
      <Button title='Camera' onPress={() => pickFromCamera()} />
      <Button title='Click to upload' onPress={() => pickFromGallery()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
