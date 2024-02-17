import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { app } from '../firebaseConfig'

export default function LoginScreen() {
  return (
    <View>
        <TouchableOpacity onPress={()=>console.log(app)}>
        <Text className="text-red-400">LoginScreen</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})