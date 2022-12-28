import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

interface IStyles {
  container: ViewStyle;
  contentBox: ViewStyle;
  buttonLogin: ViewStyle;
  loginText: TextStyle;
  signUpButton: ViewStyle;
  signUpText: ViewStyle;
  buttonLoginNoActive: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {
    height: '100%',
  },
  contentBox: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: moderateScale(25),
  },
  buttonLogin: {
    width: moderateScale(200),
    height: moderateScale(50),
    borderRadius: moderateScale(25),
    backgroundColor: '#00436f',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLoginNoActive: {
    width: moderateScale(200),
    height: moderateScale(50),
    borderRadius: moderateScale(25),
    backgroundColor: '#7b888b',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    fontSize: moderateScale(16),
    color: 'white',
    fontWeight: 'bold',
  },
  signUpButton: {
    width: moderateScale(50),
    height: moderateScale(50),
    borderRadius: moderateScale(25),
    backgroundColor: '#00436f',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    marginTop: moderateScale(16, 0.25),
  },
  signUpText: {
    fontSize: moderateScale(12),
    color: 'white',
    fontWeight: '600',
  },
});

export default styles;
