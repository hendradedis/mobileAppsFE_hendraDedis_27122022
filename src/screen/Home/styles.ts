import {ImageStyle, StyleSheet, ViewStyle} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

interface IStyles {
  container: ViewStyle;
  contentBox: ViewStyle;
  imageFoto: ViewStyle;
  image: ImageStyle;
  buttonLogout: ViewStyle;
  textPass: ViewStyle;
  textUsername: ViewStyle;
  textLogout: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {
    flex: 1,
    height: '100%',
  },
  contentBox: {
    height: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
  imageFoto: {
    width: moderateScale(100),
    height: moderateScale(100),
    backgroundColor: '#c4c4c4',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    borderRadius: 120 / 2,
  },
  buttonLogout: {
    width: moderateScale(150),
    height: moderateScale(50),
    marginTop: moderateScale(30, 0.25),
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    borderRadius: moderateScale(25),
    backgroundColor: '#00436f',
  },
  textPass: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    marginTop: moderateScale(16),
  },
  textUsername: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
  },
  textLogout: {
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    color: '#ffff',
  },
  image: {
    width: moderateScale(100),
    height: moderateScale(100),
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    borderRadius: 120 / 2,
  },
});

export default styles;
