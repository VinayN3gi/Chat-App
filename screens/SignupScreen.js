import { View, Text, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import Header from '../components/Header'
import { useScrollToTop } from '@react-navigation/native'
import { Input } from 'react-native-elements'
import { auth } from '../firebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth'

export default function SignupScreen({navigation}) {
   
  useEffect(()=>{
    navigation.setOptions({headerShown:false})
  },[])

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [fullName,setName]=useState("")

  const signUp=function()
  {
    createUserWithEmailAndPassword(auth,email,password).then(()=>console.log("Success")).catch((error)=>alert(error))
  }

  return (
    <KeyboardAvoidingView behavior='padding'>
      <Header title="Sign In"/>
      <View className="pt-4 justify-center items-center flex mb-4">
        <View className="w-80  bg-gray-300 rounded-lg">
        <Input className="mt-2 text-white text-xl" autofocus
        placeholder='Email' type="Email" value={email} onChangeText={(text)=> setEmail(text)}/>
        </View>
        <View className="w-80  bg-gray-300 rounded-lg mt-4">
        <Input className="mt-2 text-white text-xl"
        placeholder='Password' type="Password" value={password} onChangeText={(text)=> setPassword(text)}/>
        </View>
        <View className="w-80  bg-gray-300 rounded-lg mt-4">
        <Input className="mt-2 text-white text-xl"
        placeholder='Full Name' type="String" value={fullName} onChangeText={(text)=> setName(text)}/>
        </View>
        <TouchableOpacity onPress={signUp} preessDuration={0.5} className="mt-4 bg-red-500 w-80 h-16 rounded-xl justify-center items-center">
            <Text className="text-xl text-bold text-white">Sign Up</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}