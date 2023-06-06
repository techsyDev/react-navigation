import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Profile = () => {
  const navigation= useNavigation()
  console.log(navigation)
  return (
    <View>
      <Text>Profile</Text>
      <TouchableOpacity onPress={()=>navigation.openDrawer()}>
      <Text>open drawer</Text>
      </TouchableOpacity>
   
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})