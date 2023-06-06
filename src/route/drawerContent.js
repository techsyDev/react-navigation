import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DrawerContent = (props) => {
  return (
    <View>
      <Text onPress={()=>props.navigation.toggleDrawer()}>Close</Text>
    </View>
  )
}

export default DrawerContent

const styles = StyleSheet.create({})