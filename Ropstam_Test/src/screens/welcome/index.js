import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import { AppView, ContainerView } from "../../components/appViews";
import { styles } from "./style";
import { AppPrimaryButton, AppSecondaryButton } from "../../components/buttons";
import { AppColor } from "../../constants/colors";

const Welcome = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <AppView style={styles.imageView}>
        <Image
          source={require("../../assets/images/logo.png")}
          style={styles.image}
        />
      </AppView>
      <AppView style={styles.headingView}>
        <Text style={styles.headingThin}>{"B O O K   Y O U R"}</Text>
        <Text style={styles.headingThick}>DREAM CAR</Text>
      </AppView>
      <AppView>
        <Image
          source={require("../../assets/images/car.png")}
          style={styles.carImage}
        />
      </AppView>
      <AppView style={styles.loginBtnView}>
        <AppSecondaryButton
          Label={"Login"}
          onPress={() => props.navigation.navigate("Login")}
        />
      </AppView>
      <AppView>
        <AppPrimaryButton
          Label={"Register"}
          onPress={() => {
            props.navigation.navigate("SignUp");
          }}
        />
      </AppView>
      <TouchableOpacity
        style={styles.continuebtnView}
        onPress={() => {
          props.navigation.navigate("App");
        }}
      >
        <Text style={styles.continueTxt}>Continue as a guest</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default Welcome;
