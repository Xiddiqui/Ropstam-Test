import { SafeAreaView, StyleSheet, View, ScrollView } from "react-native";
import React from "react";
import { AppColor } from "../../constants/colors";

export const ContainerView = ({ children, ...otherProps }) => {
  // const {...children} = props;
  return (
    <SafeAreaView style={styles.container} {...otherProps}>
      <ScrollView showsVerticalScrollIndicator={false}>{children}</ScrollView>
    </SafeAreaView>
  );
};
export const AppView = ({ children, ...otherProps }) => {
  // const {...children} = props;
  return <View {...otherProps}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColor.primary,
  },
});
