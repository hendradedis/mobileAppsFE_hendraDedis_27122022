/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import {
  Alert,
  BackHandler,
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
} from 'react-native';
import Layouts from '../../components/layouts';
import styles from './styles';
import BackgroundImages from '../../components/backgroundImages';
import GlobalStyle from '../../components/globalstyle/styles';
import FormLogin from './components/FormLogin';
import ButtonAction from './components/ButtonAction';
import {
  FORGET_PASS,
  USER_DATA,
  USER_DATA_HOME,
} from '../../constants/user.const';
import {IMAGES} from '../../utils/images';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {IUserData} from '../SignUp/components/FormSignUp';

const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;

const defaultValue: IUserData = {
  password: '',
  username: '',
};

const LoginScreen = (): React.ReactElement => {
  const navigation = useNavigation<any>();
  const [isButtonActive, setIsButtonActive] = React.useState(false);
  const [userData, setUserData] = React.useState<IUserData>(defaultValue);
  const [wholeUserData, setWholeUserData] = React.useState<IUserData[]>([]);

  const onSubmitLogin = async () => {
    console.log('wholeUserData', wholeUserData);
    const dataPersit = wholeUserData.find(
      x => x.password === userData.password && x.username === userData.username,
    );
    console.log('persis', dataPersit);
    if (dataPersit) {
      await AsyncStorage.setItem(USER_DATA_HOME, JSON.stringify(dataPersit));
      navigation.navigate('home');
      setUserData(defaultValue);
    } else {
      Alert.alert('Maaf , silahkan cek username dan passsword anda');
    }
  };

  const onDataUserSignin = (user: IUserData) => {
    setUserData(user);
  };

  const onBackPress = () => {
    return true;
  };

  React.useEffect(() => {
    if (userData.username && userData.password) {
      setIsButtonActive(true);
    } else {
      setIsButtonActive(false);
    }
  }, [userData]);

  React.useEffect(() => {
    (async () => {
      const persistedUserData = await AsyncStorage.getItem(USER_DATA);
      if (persistedUserData) {
        setWholeUserData(JSON.parse(persistedUserData));
      }
    })();
  }, [navigation, userData]);

  React.useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      onBackPress,
    );

    return () => backHandler.remove();
  }, []);

  return (
    <Layouts style={styles.container}>
      <BackgroundImages style={GlobalStyle.styles.globalHeight}>
        <Layouts style={styles.containerBox}>
          <KeyboardAvoidingView
            behavior="position"
            keyboardVerticalOffset={keyboardVerticalOffset}>
            <Layouts style={styles.imageContainer}>
              <Image style={styles.imageStyles} source={IMAGES.image.ICONWOM} />
            </Layouts>
            <FormLogin onUserData={user => onDataUserSignin(user)} />
            <TouchableOpacity onPress={() => {}} style={styles.forgetPass}>
              <Text style={styles.forgetPassText}>{FORGET_PASS}</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
          <ButtonAction
            isActiveButton={isButtonActive}
            onPress={onSubmitLogin}
          />
        </Layouts>
      </BackgroundImages>
    </Layouts>
  );
};

export default LoginScreen;
