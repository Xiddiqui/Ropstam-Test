import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import {
  AppPrimaryButton,
  BackButton,
  SocialButtons,
} from '../../components/buttons';
import {ApptextInput} from '../../components/textInput';
import {Appearance} from 'react-native';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {Controller, FormProvider, useForm} from 'react-hook-form';

const Login = props => {
  const colorScheme = Appearance.getColorScheme();
  const [isVisisble, setIsVisible] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <BackButton
          onPress={() => {
            props.navigation.goBack();
          }}
        />
      </View>
      <View style={styles.headingView}>
        <Text style={styles.headingText}>
          Welcome back! Glad to see you, Again!
        </Text>
      </View>
      <View style={styles.txtInputCOntainer}>
        <ApptextInput label={'Enter your email'} />
      </View>
      <View style={styles.txtInputCOntainer}>
        <ApptextInput
          label={'Enter your password'}
          secureTextEntry={isVisisble}
          isPass={true}
          isVisible={isVisisble}
          iconOnpress={() => setIsVisible(!isVisisble)}
        />
      </View>
      <TouchableOpacity style={styles.forgotBtnView}>
        <Text style={styles.forgotBtnTxt}>Forgot Password?</Text>
      </TouchableOpacity>
      <View style={styles.btnView}>
        <AppPrimaryButton
          Label={'Login'}
          onPress={() => {
            props.navigation.navigate('App');
          }}
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerTxt}>Don't have an account?{'  '}</Text>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('SignUp');
          }}>
          <Text style={styles.footerBtnTxt}>Register Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
