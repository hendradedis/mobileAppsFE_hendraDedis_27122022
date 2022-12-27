import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

export default class GlobalStyle {
  static BLUE_DEFAULT_COLOUR = '#ffff'; // used for loading color
  static styles = StyleSheet.create({
    textGreenBold: {
      color: '#2ecc71',
      fontSize: moderateScale(12),
      lineHeight: 18,
      letterSpacing: 0.3,
      fontWeight: 'bold',
      textAlign: 'right',
    },
    textLight: {
      color: 'black',
      fontSize: moderateScale(14),
      fontWeight: '200',
    },
    textLightBold: {
      color: 'black',
      fontSize: moderateScale(14),
    },
    textBoldwhite: {
      fontSize: moderateScale(20, 0.25),
      letterSpacing: 0.5,
      lineHeight: moderateScale(20, 0.25),
      fontWeight: 'bold',
      color: '#ffffff',
    },
    textNormalBlack: {
      color: 'black',
      fontSize: moderateScale(12, 0.25),
      fontWeight: '400',
    },
    textNormalRed: {
      color: '#fa265b',
      fontSize: moderateScale(12, 0.25),
      fontWeight: '400',
    },
    textRedBold: {
      color: '#e74c3c',
      fontSize: moderateScale(12, 0.25),
      lineHeight: 18,
      letterSpacing: 0.3,
      fontWeight: 'bold',
      textAlign: 'right',
    },
    globalHeight: {
      height: '100%',
    },
  });
}
