import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

export default function Header({title}) {
  return (
   <SafeAreaView className="justify-center items-center h-20 bg-red-500 rounded-s mb-2">
    <Text className="pt-2 text-2xl font-bold">{title}</Text>
   </SafeAreaView>
  )
}