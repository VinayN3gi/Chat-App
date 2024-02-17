import { View, Text, SafeAreaView, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React, { useEffect } from 'react'
import Header from '../components/Header'
import CustomListItem from '../components/CustomListItem';
import { collection, getDocs } from "firebase/firestore"; 
import { db } from '../firebaseConfig';
export default function HomeScreen({navigation}) {
  
    


  useEffect(()=>{
    navigation.setOptions({headerShown:false})
  },[])  

  


  const onClick= async function()
  {
    //navigation.navigate("Chat");
    try{

        const querySnapshot = await getDocs(collection(db, "chats"));
        querySnapshot.forEach((doc) => {
        console.log(doc.id,doc.data());
        });
    }catch(e){
        alert(e)
    }
  }

  return (
    <KeyboardAvoidingView behavior='padding'>
        <Header title="Home"/>
        <CustomListItem/>
        <View className=" justify-center items-center">
        <TouchableOpacity onPress={onClick} className="bg-red-400 h-12 mt-4 rounded-lg w-80 items-center justify-center">
            <Text className=" text-xl ">Add</Text>
        </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
  )
}