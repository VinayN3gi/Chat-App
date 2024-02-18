import { View, Text, SafeAreaView, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import Header from '../components/Header'
import CustomListItem from '../components/CustomListItem';
import { collection, getDocs, onSnapshot } from "firebase/firestore"; 
import { db } from '../firebaseConfig';
import { useIsFocused, useRoute } from '@react-navigation/native';
export default function HomeScreen({navigation}) {
  const route=useRoute();
  const isFoused=useIsFocused();
  const value=route.params?.value;
  const [chat,setChats]=useState([]);

    /*const retrive= async function()
    {
        const querySnapshot = await getDocs(collection(db, "chats"));
        querySnapshot.forEach((doc) => {
        setData(data.push({id:doc.id,data:doc.data()}));
        });
        console.log(data)
    }*/

    useEffect(()=>{
      const fectData=async function()
      {
        try{
          const querySnapshot = await getDocs(collection(db, "chats"));
          const chat=[];
          querySnapshot.forEach((doc) => {
          const id=doc.id;
          const {chatName}=doc.data();
          chat.push({id,chatName});
          });
          setChats(chat);
          console.log(data)
        }
        catch(e)
        {
          
        }
      }
      fectData();
    },[isFoused])
    

    useLayoutEffect(()=>{
        navigation.setOptions({headerShown:false})
    },[])  

  


  const onClick= function()
  {
    navigation.navigate("Chat");
    
  }

  const enterChat=function(id,chatName)
  {
    navigation.navigate("Message",{id,chatName})
  }


  return (
    <KeyboardAvoidingView behavior='padding'>
        <Header title="Home"/>
        <ScrollView className=" h-full">
        {
         chat.map(({id,chatName})=><CustomListItem id={id} chatName={chatName} enterChat={enterChat}></CustomListItem>)
        }
        <View className=" justify-center items-center">
        <TouchableOpacity onPress={onClick} className="bg-red-400 h-12 mt-4 rounded-lg w-80 items-center justify-center">
            <Text className=" text-xl ">Add</Text>
        </TouchableOpacity>
        </View>
        </ScrollView>
    </KeyboardAvoidingView>
  )
}