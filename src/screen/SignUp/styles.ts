import {ImageStyle, StyleSheet, ViewStyle} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

interface IStyles {
  container: ViewStyle;
  containerBox: ViewStyle;
  imageStyles: ImageStyle;
  imageContainer: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {
    height: '100%',
    backgroundColor: 'transparant',
  },
  containerBox: {
    marginTop: '30%',
  },
  imageStyles: {
    width: moderateScale(150, 0.25),
    height: moderateScale(90, 0.25),
    padding: moderateScale(10, 0.25),
    marginBottom: moderateScale(24, 0.25),
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
