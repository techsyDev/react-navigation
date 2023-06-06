import { StyleSheet, Text,TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const Login = () => {
  const navigation= useNavigation()
  return (
    <View>
      <Text>Login</Text>

      <TouchableOpacity onPress={()=>navigation.navigate("drawer")}>
      <Text>Goto profile</Text>
      </TouchableOpacity>
    
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})