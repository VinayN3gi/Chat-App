import { View, Text } from 'react-native'
import React from 'react'
import { ListItem } from 'react-native-elements'

export default function CustomListItem() {
  return (
   <ListItem className="bg-white">
    <ListItem.Content>
    <ListItem.Title>Chatting</ListItem.Title>
    <ListItem.Subtitle numberOfLines={1} ellipsizeMode='tail'>
        This is a text
    </ListItem.Subtitle>
    </ListItem.Content>
   </ListItem>
  )
}