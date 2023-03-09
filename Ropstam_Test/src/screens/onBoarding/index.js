import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import styles from "./style";
import {
  responsiveWidth,
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { AppColor, AppTextColor, DotColor } from "../../constants/colors";
import { fontFamily } from "../../constants/fonts";
import Feather from "react-native-vector-icons/Feather";

export default ({ navigation }) => {
  const [showRealApp, setShowRealApp] = useState(false);
  const [data, setData] = useState([
    {
      key: 1,
      imagePath: require("../../assets/images/onboardin1.png"),
      mainTxt: "Always there: more than 1000 cars in HISO",
      subTxt: "Our company is a leader by the number of cars in the fleet",
    },
    {
      key: 2,
      imagePath: require("../../assets/images/onboardin2.png"),
      mainTxt: "Do not pay for parking, maintenance and gasoline",
      subTxt: "We will pay for you, all expenses related to the car",
    },
    {
      key: 3,
      imagePath: require("../../assets/images/onboardin3.png"),
      mainTxt: "29 car models: from Skoda Octavia to Porsche 911",
      subTxt: "Choose between regular car models or exclusive ones",
    },
  ]);
  const _renderItem = ({ item }) => {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.textGroup}>
            <Text style={styles.mainTxt}>{item.mainTxt}</Text>

            <View style={styles.subTexCon}>
              <Text style={styles.subTxt}>{item.subTxt}</Text>
              <Text
                style={[
                  styles.subTxt,
                  {
                    marginTop: responsiveHeight(0.8),
                    width: responsiveWidth(95),
                  },
                ]}
              >
                {item.sub}
              </Text>
            </View>
          </View>
          <View style={styles.image1View}>
            <Image source={item.imagePath} style={styles.image} />
          </View>
        </View>
      </SafeAreaView>
    );
  };

  const _renderNextButton = (item) => {
    return (
      <View
        style={{
          backgroundColor: AppTextColor.primary,
          height: responsiveWidth(10),
          width: responsiveWidth(10),
          borderRadius: responsiveWidth(10 / 2),
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Feather
          name={"chevron-right"}
          color={AppTextColor.golden}
          size={responsiveFontSize(3.5)}
        />
      </View>
    );
  };

  const _renderDoneButton = () => {
    return (
      <View
        style={{
          backgroundColor: AppTextColor.primary,
          height: responsiveWidth(10),
          width: responsiveWidth(10),
          borderRadius: responsiveWidth(10 / 2),
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Feather
          name={"chevron-right"}
          color={AppTextColor.golden}
          size={responsiveFontSize(3.5)}
        />
      </View>
    );
  };

  const _renderSkipButton = () => {
    return (
      <View>
        <Text
          style={{
            color: AppTextColor.primary,
            fontSize: responsiveScreenFontSize(2),
          }}
        >
          SKIP
        </Text>
      </View>
    );
  };

  const _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    navigation.navigate("Welcome");
  };
  return (
    <AppIntroSlider
      data={data}
      renderItem={_renderItem}
      renderNextButton={_renderNextButton}
      renderDoneButton={_renderDoneButton}
      renderSkipButton={_renderSkipButton}
      activeDotStyle={{
        backgroundColor: DotColor.primary,
        marginBottom: responsiveHeight(13),
      }}
      dotStyle={{
        marginBottom: responsiveHeight(13),
        backgroundColor: DotColor.secondaty,
      }}
      onDone={() => navigation.navigate("Welcome")}
      onSkip={() => navigation.navigate("Welcome")}
      showSkipButton={true}
    />
  );
};
