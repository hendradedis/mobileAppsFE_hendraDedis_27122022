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
    flex: 1,
    height: '100%',
    backgroundColor: 'transparant',
  },
  containerBox: {
    height: '100%',
    justifyContent: 'center',
    alignContent: 'center',
  },
  imageStyles: {
    width: moderateScale(200, 0.25),
    height: moderateScale(120, 0.25),
    padding: moderateScale(10, 0.25),
    marginBottom: moderateScale(36, 0.25),
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
