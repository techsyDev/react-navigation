import { createStackNavigator } from '@react-navigation/stack';
import DrawerContent from './drawerContent';
import Login from '../screens/login';
import Profile from '../screens/profile';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator()



const DrawerNavigator=()=>{
    return(
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="profile" component={Profile} />
  </Drawer.Navigator>
  )
}
const Route=()=> {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="drawer" component={DrawerNavigator} />
     
    </Stack.Navigator>
    </NavigationContainer>
    
  );
}

export default Route