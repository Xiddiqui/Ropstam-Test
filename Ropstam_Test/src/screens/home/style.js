import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {
  AppColor,
  AppTextColor,
  cardColor,
  AppBorderColor,
} from '../../constants/colors';
import {fontFamily} from '../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColor.primary,
  },
  heading: {
    color: AppTextColor.primary,
    fontSize: responsiveFontSize(2.5),
    fontFamily: fontFamily.appTextExtraBold,
    marginLeft: responsiveWidth(5),
    marginTop: responsiveHeight(2),
  },
  addButton: {
    backgroundColor: AppTextColor.golden,
    height: responsiveWidth(10),
    width: responsiveWidth(10),
    borderRadius: responsiveWidth(10 / 2),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 1,
    alignSelf: 'flex-end',
    bottom: responsiveWidth(25),
    right: responsiveWidth(4),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    backgroundColor: cardColor.primary,
    borderRadius: 20,
    width: responsiveWidth(90),
    paddingVertical: responsiveHeight(3),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    fontFamily: fontFamily.appTextExtraBold,
    fontSize: responsiveFontSize(2.5),
    marginVertical: responsiveHeight(1),
    color: AppTextColor.primary,
  },
  textInput: {
    width: responsiveWidth(80),
    borderWidth: responsiveWidth(0.3),
    borderRadius: responsiveWidth(2),
    marginTop: responsiveHeight(1),
    paddingLeft: responsiveWidth(3),
    color: AppTextColor.primary,
    borderColor: AppTextColor.primary,
  },
  btn: {
    backgroundColor: AppTextColor.golden,
    width: responsiveWidth(80),
    height: responsiveHeight(6),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: responsiveWidth(2),
    marginTop: responsiveHeight(2),
  },
  btnText: {
    color: AppTextColor.primary,
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(2.5),
  },
  picker: {
    width: responsiveWidth(80),
    alignSelf: 'center',
    borderWidth: responsiveWidth(1),
    borderColor: AppBorderColor.primary,
    color: AppTextColor.primary,
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(2),
  },
  pickerView: {
    borderWidth: responsiveWidth(0.3),
    marginTop: responsiveHeight(0.3),
    borderRadius: responsiveWidth(2),
    borderColor: AppBorderColor.primary,
    width: responsiveWidth(80),
  },
  errorMessageText: {
    color: 'red',
    marginTop: responsiveHeight(0.5),
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.5),
  },
  footer: {
    height: responsiveHeight(12),
  },
});
