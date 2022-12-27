import {Platform, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

interface IStyles {
  container: ViewStyle;
  containerBox: ViewStyle;
  emailText: TextStyle;
  inputStyleEmail: ViewStyle;
  passText: TextStyle;
  inputStylePass: ViewStyle;
  forgetPass: ViewStyle;
  forgetPassText: TextStyle;
  icons: ViewStyle;
  inputBox: ViewStyle;
  inputRetype: ViewStyle;
  textWarning: TextStyle;
}
const isIos = Platform.OS === 'ios';

const styles = StyleSheet.create<IStyles>({
  container: {
    flex: 1,
    height: '100%',
  },
  containerBox: {
    padding: moderateScale(8),
    justifyContent: 'center',
    paddingHorizontal: moderateScale(20, 0.25),
    marginHorizontal: moderateScale(20),
    borderRadius: moderateScale(8),
  },
  emailText: {
    fontSize: moderateScale(14),
    marginBottom: moderateScale(8),
    color: '#00436f',
    letterSpacing: 1,
  },
  inputStyleEmail: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: moderateScale(12, 0.25),
    paddingHorizontal: moderateScale(12),
    borderTopRightRadius: moderateScale(20),
    fontSize: moderateScale(12),
    borderTopLeftRadius: moderateScale(4),
    shadowColor: 'black',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  passText: {
    fontSize: moderateScale(14),
    marginBottom: moderateScale(8),
    color: '#00436f',
    letterSpacing: 1,
  },
  inputStylePass: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: isIos ? moderateScale(12, 0.25) : moderateScale(0, 0.25),
    paddingHorizontal: moderateScale(12),
    borderBottomRightRadius: moderateScale(20),
    fontSize: moderateScale(12),
    borderTopLeftRadius: moderateScale(4),
    shadowColor: 'black',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  forgetPass: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop: moderateScale(16, 0.25),
  },
  forgetPassText: {
    fontSize: moderateScale(12),
    marginBottom: moderateScale(8),
    color: '#00436f',
  },
  icons: {
    width: '11%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputBox: {
    width: '89%',
    paddingRight: moderateScale(8),
  },
  inputRetype: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: isIos ? moderateScale(12, 0.25) : moderateScale(0, 0.25),
    paddingHorizontal: moderateScale(12),
    borderTopRightRadius: moderateScale(20),
    fontSize: moderateScale(12),
    borderTopLeftRadius: moderateScale(4),
    shadowColor: 'black',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textWarning: {
    fontSize: moderateScale(10),
    paddingTop: moderateScale(10),
    textAlign: 'right',
    color: '#c4c4c4',
  },
});

export default styles;
