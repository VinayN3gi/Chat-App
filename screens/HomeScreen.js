import { View, Text, SafeAreaView, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import Header from '../components/Header'
import CustomListItem from '../components/CustomListItem';
import { collection, getDocs } from "firebase/firestore"; 
import { db } from '../firebaseConfig';
import { useRoute } from '@react-navigation/native';
import { Button } from 'react-native-elements';
export default function HomeScreen({navigation}) {
  
  const route=useRoute();
  const value=route.params?.value;
  const [chat,setChats]=useState([]);

    const retrive= async function()
    {
        const querySnapshot = await getDocs(collection(db, "chats"));
        querySnapshot.forEach((doc) => {
        setData(data.push({id:doc.id,data:doc.data()}));
        });
        console.log(data)
    }

    useEffect(()=>{
      if(value)
      {
        setChats(value);
      }
    },[value])
    

    useLayoutEffect(()=>{
        navigation.setOptions({headerShown:false})
    },[])  

  


  const onClick= function()
  {
    navigation.navigate("Chat");
    
  }

  return (
    <KeyboardAvoidingView behavior='padding'>
        <Header title="Home"/>
        <CustomListItem/>
        <View className=" justify-center items-center">
        <TouchableOpacity onPress={onClick} className="bg-red-400 h-12 mt-4 rounded-lg w-80 items-center justify-center">
            <Text className=" text-xl ">Add</Text>
        </TouchableOpacity>
        <Button onPress={()=>console.log(chat)}title="Click Me"></Button>
        </View>
    </KeyboardAvoidingView>
  )
}