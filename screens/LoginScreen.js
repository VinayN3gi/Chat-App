import { KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { app ,auth} from '../firebaseConfig'
import Header from '../components/Header'
import { Input} from 'react-native-elements'
import { signInWithEmailAndPassword } from 'firebase/auth'

export default function LoginScreen({navigation}) {

    useEffect(()=>{
        navigation.setOptions({
            headerShown:false
        })
    },[])

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const logIn=function(){
        
        if(email==="" || password==="")
        {

            alert("Either email or password is empty")
        }
        else
        {
            signInWithEmailAndPassword(auth,email,password).then(console.log("Success")).catch((error)=>alert(error))
        }

    }

    const signUp=function()
    {
        navigation.navigate("SignUp")
    }
    
    auth.onAuthStateChanged((authUser)=>{
        if(authUser)
        {   
         navigation.replace("Home")
        }
    });

  return (
   <KeyboardAvoidingView behavior='padding'>
    <Header title="Log In"/>
    <View className="pt-4 justify-center items-center flex mb-4">
        <View className="w-80  bg-gray-300 rounded-lg">
        <Input className="mt-2 text-white text-xl" autofocus
        placeholder='Email' type="Email" value={email} onChangeText={(text)=> setEmail(text)}/>
        </View>
        <View className="w-80  bg-gray-300 rounded-lg mt-4">
        <Input className="mt-2 text-white text-xl"
        placeholder='Password' type="Password" value={password} onChangeText={(text)=> setPassword(text)}/>
        </View>
        <TouchableOpacity onPress={logIn} preessDuration={0.5} className="mt-4 bg-red-500 w-80 h-16 rounded-xl justify-center items-center">
            <Text className="text-xl text-bold text-white">Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={signUp} preessDuration={0.5} className="mt-4 bg-red-500 w-80 h-16 rounded-xl justify-center items-center">
            <Text className="text-xl text-bold text-white">Sign Up</Text>
        </TouchableOpacity>
    </View>
   </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({})