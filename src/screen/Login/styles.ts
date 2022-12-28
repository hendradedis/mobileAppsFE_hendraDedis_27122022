import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

interface IStyles {
  container: ViewStyle;
  containerBox: ViewStyle;
  imageStyles: ImageStyle;
  imageContainer: ViewStyle;
  forgetPass: ViewStyle;
  forgetPassText: TextStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {
    height: '100%',
  },
  containerBox: {
    height: '100%',
  },
  imageStyles: {
    marginTop: moderateScale(150),
    width: moderateScale(160, 0.25),
    height: moderateScale(100, 0.25),
    padding: moderateScale(10, 0.25),
    marginBottom: moderateScale(36, 0.25),
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgetPass: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop: moderateScale(16, 0.25),
    paddingHorizontal: moderateScale(36),
  },
  forgetPassText: {
    fontSize: moderateScale(12),
    marginBottom: moderateScale(8),
    color: '#00436f',
  },
});

export default styles;
