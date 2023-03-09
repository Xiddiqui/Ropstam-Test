import React from 'react';
import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {AppColor, AppTextColor} from '../../constants/colors';
import {fontFamily} from '../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColor.primary,
    flex: 1,
  },
  headingView: {
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginTop: responsiveHeight(2),
    marginBottom: responsiveHeight(3),
  },
  headingText: {
    color: AppTextColor.primary,
    fontFamily: fontFamily.appTextExtraBold,
    fontSize: responsiveFontSize(3),
  },
  forgotBtnView: {
    alignSelf: 'flex-end',
    marginTop: responsiveHeight(1),
    marginRight: responsiveWidth(5),
  },
  forgotBtnTxt: {
    color: AppTextColor.lightGrey,
    fontFamily: fontFamily.appTextRegular,
  },
  txtInputCOntainer: {
    marginTop: responsiveHeight(2),
  },
  btnView: {
    marginVertical: responsiveHeight(5),
  },
  line: {
    backgroundColor: AppTextColor.lightGrey,
    height: responsiveHeight(0.1),
    width: responsiveWidth(30),
  },
  withView: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  withText: {
    paddingHorizontal: responsiveWidth(2.5),
    color: AppTextColor.lightandDarkGrey,
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(2),
  },
  socialIconView: {
    flexDirection: 'row',
    width: responsiveWidth(90),
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginTop: responsiveHeight(3),
  },
  footer: {
    alignSelf: 'center',
    marginTop: responsiveHeight(30),
    flexDirection: 'row',
  },
  footerTxt: {
    color: AppTextColor.primary,
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(2),
  },
  footerBtnTxt: {
    color: AppTextColor.golden,
    fontFamily: fontFamily.appTextBold,
    fontSize: responsiveFontSize(2),
  },
});
