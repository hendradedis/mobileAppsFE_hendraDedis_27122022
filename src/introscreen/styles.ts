import {Dimensions, ImageStyle, StyleSheet, ViewStyle} from 'react-native';

interface IStyles {
  container: ViewStyle;
  imgLogo: ImageStyle;
}

const {height} = Dimensions.get('window');
const styles = StyleSheet.create<IStyles>({
  container: {
    flex: 1,
    backgroundColor: 'white',
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '75%',
    height: '75%',
  },
});

export default styles;
