import { StyleSheet } from "react-native";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { AppColor, AppTextColor } from "../../constants/colors";
import { fontFamily } from "../../constants/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColor.primary,
  },
  image: {
    height: responsiveWidth(30),
    width: responsiveWidth(40),
    resizeMode: "contain",
  },
  imageView: {
    alignSelf: "center",
  },
  headingThin: {
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(2.5),
    color: AppTextColor.primary,
  },
  headingThick: {
    fontFamily: fontFamily.appTextExtraBold,
    fontSize: responsiveFontSize(4),
    color: AppTextColor.primary,
  },
  headingView: {
    alignSelf: "center",
    alignItems: "center",
  },
  continuebtnView: {
    alignSelf: "center",
    position: "absolute",
    bottom: responsiveHeight(4),
  },
  continueTxt: {
    color: AppTextColor.golden,
    fontFamily: fontFamily.appTextBold,
  },
  carImage: {
    height: responsiveWidth(50),
    width: responsiveWidth(80),
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: responsiveHeight(3),
  },
  loginBtnView: {
    marginTop: responsiveHeight(10),
    marginBottom: responsiveHeight(3),
  },
});
