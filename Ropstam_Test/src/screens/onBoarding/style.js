import { StyleSheet } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { AppColor, AppTextColor } from "../../constants/colors";
import { fontFamily } from "../../constants/fonts";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColor.primary,
  },
  image: {
    width: responsiveWidth(100),
    height: responsiveHeight(55),
    // resizeMode: "contain",
    resizeMode: "cover",
  },
  Logo: {
    alignItems: "center",
    marginVertical: responsiveHeight(13),
  },
  image1View: {
    // marginVertical: responsiveHeight(5),
    alignSelf: "center",
  },
  mainTxt: {
    fontSize: responsiveFontSize(2.5),
    fontFamily: fontFamily.appTextBold,
    marginTop: responsiveHeight(2),
    color: AppTextColor.primary,
  },
  textGroup: {
    marginLeft: responsiveWidth(4),
  },
  subTexCon: {
    // width: responsiveWidth(85),
    marginTop: responsiveHeight(1),
  },
  subTxt: {
    // alignSelf: "center",
    fontSize: responsiveFontSize(2),
    color: AppTextColor.subHeadingText,
    fontFamily: fontFamily.appTextRegular,
  },
  skipButton: {
    backgroundColor: AppColor.primary,
    height: responsiveHeight(6),
    width: responsiveWidth(90),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: responsiveWidth(5),
  },
});
