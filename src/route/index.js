import { createStackNavigator } from '@react-navigation/stack';
import DrawerContent from './drawerContent';
import Login from '../screens/login';
import Profile from '../screens/profile';

const Stack = createStackNavigator();





const DrawerNavigator=()=>{
    return(
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Stack.Screen name="profile" component={Profile} />
  </Drawer.Navigator>
  )
}
const Route=()=> {
  return (
    <Stack.Navigator>
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="drawer" component={DrawerNavigator} />
     
    </Stack.Navigator>
  );
}

export default Route