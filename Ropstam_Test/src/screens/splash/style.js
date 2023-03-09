import { StyleSheet } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { AppColor } from "../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColor.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: responsiveWidth(70),
    width: responsiveWidth(70),
    resizeMode: "contain",
  },
});
