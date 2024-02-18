import { View, Text, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Input } from 'react-native-elements'
import { db } from '../firebaseConfig'
import { collection, addDoc ,getDocs} from "firebase/firestore";

export default function ChatScreen({navigation}) {
    useEffect(()=>{
        navigation.setOptions({headerShown:false})
    },[])

    const [input,setInput]=useState("");
    const [data,setData]=useState([]);

    const addChat= async function()
    {
        try {
            const docRef = await addDoc(collection(db, "chats"), {
              chatName:input
            });
            console.log("Document written with ID: ", docRef.id);
            navigation.navigate("Home",{value:data});
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }

  return (
    <KeyboardAvoidingView behavior='padding'>
        <Header title="Add Chat"/>
        <View className=" bg-gray-300 rounded-lg">
        <Input className="mt-2 text-white text-xl" autofocus
        placeholder='Enter a chat' type="String" value={input} onChangeText={(text)=> setInput(text)}/>
        </View>
        <View className="justify-center items-center">
        <TouchableOpacity onPress={addChat} preessDuration={0.5} className="mt-4 bg-red-500 w-80 h-16 rounded-xl justify-center items-center">
            <Text className="text-xl text-bold text-white">Add Chat</Text>
        </TouchableOpacity>       
        </View>
    </KeyboardAvoidingView>
  )
}