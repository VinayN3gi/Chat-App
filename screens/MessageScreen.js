import { View, Text, KeyboardAvoidingView, ScrollView, TouchableOpacity, Keyboard } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import Header from '../components/Header';
import { Input,Button } from 'react-native-elements';
import { auth, db } from '../firebaseConfig';
import { doc,collection,addDoc, serverTimestamp,getDocs, orderBy } from 'firebase/firestore';

const MessageScreen = ({navigation}) => {
  const route=useRoute();
  const title=route.params?.chatName;
  const id=route.params?.id
  const [input,setInput]=useState("");
  const [count,setCount]=useState(1);
  const [chats,setChats]=useState([]);
  useLayoutEffect(()=>{
    navigation.setOptions({headerShown:false})
  })
  
  useEffect(()=>{
    const fetchData=async function()
    {
      const chat=[];
      try{
        const querySnapshot = await getDocs(collection(db,`chats/${id}/message`));
        querySnapshot.forEach((doc) => {
          const id=doc.id;
          const data=doc.data();
          chat.push({id,data});
        });
        setChats(chat);
      }
      catch(e){
        alert(e)
      }
    }
    fetchData();
  },[count])

  const sendClick= async function()
  {
    Keyboard.dismiss();
    try {
        const docRef = await addDoc(collection(db,"chats/"+id,"message"), {
          timestamp:serverTimestamp(),
          message:input,
          email:auth.currentUser.email
        });
        setInput("")
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      setCount(count+1);
      console.log(auth.currentUser.email)
  }

    return (
    <KeyboardAvoidingView className="flex-1">
        <Header title={title}/>
        <ScrollView>
          {
            chats.map(({id,data})=><View key={id}>
                <Text>{data.message}</Text>
            </View>)
          }
        </ScrollView>
        <View className="justify-center items-center">
            <Input className="bottom-0 h-4  outline-none bg-gray-300 color-white rounded-lg"
            placeholder='Enter a message' value={input} onChangeText={(text)=>setInput(text)} />
        </View>
        <View className="justify-center items-center ">
        <TouchableOpacity onPress={sendClick} type="String" className="bg-red-400 h-12 mb-1 rounded-lg w-40 items-center justify-center">
            <Text className=" text-xl">Send</Text>
        </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
  )
}

export default MessageScreen