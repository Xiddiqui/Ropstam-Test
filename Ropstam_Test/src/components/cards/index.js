import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {AppTextColor, cardColor} from '../../constants/colors';
import {fontFamily} from '../../constants/fonts';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const ListingsCard = props => {
  const {name, color, reg, delPress} = props;
  return (
    <View style={styles.hotOfferContainer}>
      {/* <Image
        source={require('../../assets/images/hotOffers/car1.png')}
        style={styles.HotOffersCardImage}
      /> */}
      <View>
        <Text style={styles.HotOffersCardHeading}>{name}</Text>
        <View style={styles.foundTxtView}>
          <Text style={styles.foundTxt}>Color : {color}</Text>
        </View>
        <Text
          style={[
            styles.HotOffersCardHeading,
            {
              color: AppTextColor.primary,
              width: responsiveWidth(70),
              marginTop: responsiveHeight(1),
            },
          ]}>
          Registration : {reg}
        </Text>
      </View>
      <AntDesign
        name={'delete'}
        size={responsiveFontSize(2.5)}
        color={'red'}
        onPress={delPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: responsiveWidth(32),
    width: responsiveWidth(32),
    backgroundColor: '#2E3947',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: responsiveWidth(4),
  },
  image: {
    height: responsiveWidth(19),
    width: responsiveWidth(19),
    resizeMode: 'contain',
  },
  txt: {
    fontFamily: fontFamily.appTextRegular,
    color: AppTextColor.primary,
    fontSize: responsiveFontSize(2),
  },
  hotOfferContainer: {
    // height: responsiveHeight(15),
    width: responsiveWidth(90),
    alignSelf: 'center',
    backgroundColor: cardColor.primary,
    borderRadius: responsiveWidth(4),
    flexDirection: 'row',
    marginTop: responsiveHeight(2),
    justifyContent: 'space-between',
    paddingRight: responsiveWidth(4),
    paddingVertical: responsiveHeight(1),
    paddingLeft: responsiveWidth(3),
  },
  HotOffersCardImage: {
    height: responsiveWidth(30),
    width: responsiveWidth(40),
    resizeMode: 'contain',
  },
  HotOffersCardHeading: {
    fontFamily: fontFamily.appTextExtraBold,
    fontSize: responsiveFontSize(2.3),
    color: AppTextColor.golden,
  },
  forwardIcon: {
    height: responsiveWidth(3),
    width: responsiveWidth(3),
    resizeMode: 'contain',
    marginLeft: responsiveWidth(3),
  },
  foundTxt: {
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.5),
    color: AppTextColor.primary,
  },
  foundTxtView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: responsiveHeight(1),
  },
});
