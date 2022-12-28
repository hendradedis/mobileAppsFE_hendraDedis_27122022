/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import Layouts from '../../components/layouts';
import styles from './styles';
import BackgroundImages from '../../components/backgroundImages';
import GlobalStyle from '../../components/globalstyle/styles';
import {
  Alert,
  BackHandler,
  Image,
  Platform,
  Text,
  TouchableOpacity,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import {LOGOUT, SUCCESSFULLY, USER_DATA_HOME} from '../../constants/user.const';
import {IMAGES} from '../../utils/images';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {IUserData} from '../SignUp/components/FormSignUp';
import LinearGradient from 'react-native-linear-gradient';
import {useToast} from 'react-native-toast-notifications';

const defaultValue: IUserData = {
  password: '',
  username: '',
};
const isIos = Platform.OS === 'ios';
const HomeScreen = (): React.ReactElement => {
  const toast = useToast();
  const navigation = useNavigation<any>();
  const [wholeUserData, setWholeUserData] =
    React.useState<IUserData>(defaultValue);

  const showToast = () => {
    toast.show(SUCCESSFULLY, {
      type: 'success',
      placement: isIos ? 'bottom' : 'top',
      duration: 4000,
      animationType: 'slide-in',
      dangerColor: 'red',
    });
  };

  const alertButtonWarning = (): void =>
    Alert.alert('Notice', 'Are you sure you want to exit ?', [
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
      {text: 'OK', onPress: () => navigation.navigate('login')},
    ]);

  const logout = () => {
    alertButtonWarning();
  };

  const onBackPress = () => {
    return true;
  };

  React.useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      onBackPress,
    );

    return () => backHandler.remove();
  }, []);

  React.useEffect(() => {
    (async () => {
      const persistedUserData = await AsyncStorage.getItem(USER_DATA_HOME);
      if (persistedUserData) {
        setWholeUserData(JSON.parse(persistedUserData));
      }
      showToast();
    })();
  }, []);
  return (
    <Layouts style={styles.container}>
      <BackgroundImages style={GlobalStyle.styles.globalHeight}>
        <Layouts style={styles.contentBox}>
          <Layouts style={styles.imageFoto}>
            <Image style={styles.image} source={IMAGES.image.ICONPROFILE} />
          </Layouts>
          <Layouts style={{marginTop: moderateScale(24)}}>
            <Text
              style={
                styles.textUsername
              }>{`Username : ${wholeUserData?.username}`}</Text>
            <Text style={styles.textPass}>
              {`Password : ${wholeUserData?.password}`}{' '}
            </Text>
          </Layouts>
          <TouchableOpacity onPress={() => logout()}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              colors={['#0a6eb1', '#074d7c', '#053759', '#032135']}
              style={styles.buttonLogout}>
              <Text style={styles.textLogout}>{LOGOUT}</Text>
            </LinearGradient>
          </TouchableOpacity>
        </Layouts>
      </BackgroundImages>
    </Layouts>
  );
};

export default HomeScreen;
