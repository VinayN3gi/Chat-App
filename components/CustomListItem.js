import { View, Text } from 'react-native'
import React from 'react'
import { ListItem } from 'react-native-elements'

export default function CustomListItem({id,chatName,enterChat}) {
  return (
   <ListItem onPress={()=>enterChat(id,chatName)}className="bg-white mb-2" key={id} bottomDivider>
    <ListItem.Content>
    <ListItem.Title>{chatName}</ListItem.Title>
    <ListItem.Subtitle numberOfLines={1} ellipsizeMode='tail'>
        ABC
    </ListItem.Subtitle>
    </ListItem.Content>
   </ListItem>
  )
}