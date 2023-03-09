import { TextInput, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { AppIconColor, AppTextColor, cardColor } from "../../constants/colors";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import Feather from "react-native-vector-icons/Feather";

export default SearchBar = () => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8}>
      <Feather
        name={"search"}
        color={AppIconColor.primary}
        size={responsiveFontSize(3)}
      />
      <TextInput
        placeholder="Search"
        placeholderTextColor={AppTextColor.searcjInputPlaceholder}
        style={styles.input}
        editable={false}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: cardColor.primary,
    width: responsiveWidth(90),
    height: responsiveHeight(6),
    alignSelf: "center",
    borderRadius: responsiveWidth(6),
    paddingLeft: responsiveWidth(3),
    flexDirection: "row",
    alignItems: "center",
    marginTop: responsiveHeight(2),
  },
  input: {
    marginLeft: responsiveWidth(2),
  },
});
