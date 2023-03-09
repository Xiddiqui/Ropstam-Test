import { TouchableOpacity, Text, StyleSheet, Image, View } from "react-native";
import React from "react";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import {
  AppBorderColor,
  AppIconColor,
  AppTextColor,
  ButtonColor,
  ButtonTextColr,
} from "../../constants/colors";
import { fontFamily } from "../../constants/fonts";
import Feather from "react-native-vector-icons/Feather";

export const AppPrimaryButton = (props) => {
  const { Label, onPress } = props;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.buttonText}>{Label}</Text>
    </TouchableOpacity>
  );
};

export const AppSecondaryButton = (props) => {
  const { onPress, Label } = props;
  return (
    <TouchableOpacity style={styles.Secondarycontainer} onPress={onPress}>
      <Text style={styles.SecondarybuttonText}>{Label}</Text>
    </TouchableOpacity>
  );
};

export const BackButton = (props) => {
  const { onPress } = props;
  return (
    <TouchableOpacity style={styles.backIconContainer} onPress={onPress}>
      <Feather
        name="chevron-left"
        size={30}
        color={AppIconColor.backIconClor}
      />
    </TouchableOpacity>
  );
};

export const SocialButtons = (props) => {
  const { image } = props;
  return (
    <TouchableOpacity style={styles.socialIconButtonContainer}>
      <Image source={image} style={styles.socialIcon} />
    </TouchableOpacity>
  );
};

export const TextwithseeallButton = (props) => {
  const { label } = props;
  return (
    <View style={styles.TextwithseeallButtonContainer}>
      <Text style={styles.TextwithseeallButtonText}>{label}</Text>
      <TouchableOpacity>
        <Text style={styles.seeallBtn}>See all</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: ButtonColor.primary,
    height: responsiveHeight(6),
    alignItems: "center",
    justifyContent: "center",
    width: responsiveWidth(90),
    alignSelf: "center",
    borderRadius: responsiveWidth(2),
  },
  buttonText: {
    color: ButtonTextColr.primary,
    fontSize: responsiveFontSize(2),
    fontFamily: fontFamily.appTextMedium,
  },
  Secondarycontainer: {
    height: responsiveHeight(6),
    alignItems: "center",
    justifyContent: "center",
    width: responsiveWidth(90),
    alignSelf: "center",
    borderRadius: responsiveWidth(2),
    borderWidth: responsiveWidth(0.3),
    borderColor: AppBorderColor.primary,
  },
  SecondarybuttonText: {
    color: ButtonTextColr.secondary,
    fontSize: responsiveFontSize(2),
    fontFamily: fontFamily.appTextMedium,
  },
  backIconContainer: {
    width: responsiveWidth(13),
    height: responsiveHeight(6),
    borderRadius: responsiveWidth(3),
    alignItems: "center",
    justifyContent: "center",
    marginLeft: responsiveWidth(4),
    borderWidth: responsiveWidth(0.3),
    marginTop: responsiveHeight(1),
    borderColor: AppIconColor.backIconBorderColor,
  },
  socialIconButtonContainer: {
    width: responsiveWidth(25),
    height: responsiveHeight(6),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: responsiveWidth(2),
    borderWidth: responsiveWidth(0.3),
    borderColor: AppIconColor.socialIconBorderColor,
  },
  socialIcon: {
    width: responsiveWidth(7),
    height: responsiveWidth(7),
    resizeMode: "contain",
  },
  TextwithseeallButtonContainer: {
    width: responsiveWidth(90),
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: responsiveHeight(2),
  },
  TextwithseeallButtonText: {
    color: AppTextColor.primary,
    fontSize: responsiveFontSize(2),
    fontFamily: fontFamily.appTextExtraBold,
  },
  seeallBtn: {
    color: AppTextColor.primary,
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.5),
    textDecorationLine: "underline",
  },
});
