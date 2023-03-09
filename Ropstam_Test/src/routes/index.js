import AuthApp from './authStack';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import App from './userStack';
import {StatusBar, Appearance} from 'react-native';
import {AppColor} from '../constants/colors';

const AppStack = createNativeStackNavigator();
const colorScheme = Appearance.getColorScheme();
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={AppColor.primary}
        barStyle={'light-content'}
      />
      <AppStack.Navigator
        screenOptions={{headerShown: false, gestureEnabled: false}}>
        <AppStack.Screen name={'Auth'} component={AuthApp} />
        <AppStack.Screen name={'App'} component={App} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
