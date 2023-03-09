import {Explore, WishList, Trips, Inbox, Profile, Home} from '../../screens';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import React from 'react';
import {Text, View, Image, StyleSheet, Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {fontFamily} from '../../constants/fonts';
import {AppTextColor} from '../../constants/colors';

const MainApp = createNativeStackNavigator();

const App = () => {
  return (
    <MainApp.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'Home'}>
      <MainApp.Screen name={'Home'} component={Home} />
    </MainApp.Navigator>
  );
};
const styles = StyleSheet.create({
  icon: {
    height: responsiveWidth(6),
    width: responsiveWidth(6),
    resizeMode: 'contain',
    marginTop: responsiveHeight(1),
  },
  iconTxt: {
    fontFamily: fontFamily.appTextBold,
    fontSize: responsiveFontSize(1.4),
    marginTop: responsiveHeight(0.5),
    color: AppTextColor.primary,
    textAlign: 'center',
  },
  tabView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Platform.OS === 'ios' ? responsiveHeight(2) : 0,
    width: responsiveWidth(15),
  },
});

export default App;
