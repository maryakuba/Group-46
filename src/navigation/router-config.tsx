import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import SignIn from '../screens/auth/SignIn';
import SignUp from '../screens/auth/SignUp';



const Stack = createNativeStackNavigator();
const RouterConfig = () => {
  return (

   
       <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="SignUp">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  
   
  );
};

export default RouterConfig;
