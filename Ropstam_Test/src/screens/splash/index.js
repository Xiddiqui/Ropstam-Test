import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import { styles } from "./style";

const Splash = (props) => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate("OnBoradingScreen");
    }, 1000);
  }, []);
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/logo.png")}
        style={styles.image}
      />
    </View>
  );
};

export default Splash;
