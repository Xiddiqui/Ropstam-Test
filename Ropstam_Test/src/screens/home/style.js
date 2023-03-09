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
    alignSelf: 'flex-end',
    bottom: responsiveWidth(5),
    right: responsiveWidth(5),
  },
});
