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

const SignUp = props => {
  const colorScheme = Appearance.getColorScheme();
  const [isVisisble, setIsVisible] = useState(false);
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
        <Text style={styles.headingText}>Hello! Register to get started</Text>
      </View>
      <View style={styles.txtInputCOntainer}>
        <ApptextInput label={'Username'} />
      </View>
      <View style={styles.txtInputCOntainer}>
        <ApptextInput label={'Email'} />
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
      <View style={styles.txtInputCOntainer}>
        <ApptextInput
          label={'Confirm Password'}
          secureTextEntry={isVisisble}
          isPass={true}
          isVisible={isVisisble}
          iconOnpress={() => setIsVisible(!isVisisble)}
        />
      </View>
      <View style={styles.btnView}>
        <AppPrimaryButton Label={'Register'} />
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerTxt}>Already have an account?{'  '}</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
          <Text style={styles.footerBtnTxt}>Login Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
