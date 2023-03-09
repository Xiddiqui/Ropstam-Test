import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, SignUp, Splash, Welcome} from '../../screens';

const AuthStack = createNativeStackNavigator();
const AuthApp = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{headerShown: false, gestureEnabled: false}}
      initialRouteName={'Login'}>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
    </AuthStack.Navigator>
  );
};

export default AuthApp;
