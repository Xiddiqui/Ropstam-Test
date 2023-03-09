import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { fontFamily } from "../../constants/fonts";
import { AppTextColor } from "../../constants/colors";
import Feather from "react-native-vector-icons/Feather";

export const ApptextInput = (props) => {
  const {
    onChangeText,
    label,
    value,
    isVisible = false,
    isPass = false,
    secureTextEntry,
    iconOnpress,
  } = props;
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={label}
        value={value}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        placeholderTextColor={"#737678"}
        style={styles.input}
      />
      {isPass ? (
        <View>
          {isVisible ? (
            <Feather
              name={"eye"}
              size={responsiveFontSize(2.7)}
              onPress={iconOnpress}
            />
          ) : (
            <Feather
              name={"eye-off"}
              size={responsiveFontSize(2.7)}
              onPress={iconOnpress}
            />
          )}
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F2F2F2",
    width: responsiveWidth(90),
    height: responsiveHeight(6),
    borderRadius: responsiveWidth(2),
    alignSelf: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: responsiveWidth(3),
  },
  input: {
    width: "93%",
    fontFamily: fontFamily.appTextRegular,
    color: AppTextColor.black,
    marginRight: responsiveWidth(1),
  },
});
