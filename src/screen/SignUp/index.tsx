import * as React from 'react';
import {Image, KeyboardAvoidingView, Platform} from 'react-native';
import Layouts from '../../components/layouts';
import styles from './styles';
import BackgroundImages from '../../components/backgroundImages';
import GlobalStyle from '../../components/globalstyle/styles';
import ButtonActions from './components/ButtonSignUp';
import FormSignUp, {IUserData} from './components/FormSignUp';
import {IMAGES} from '../../utils/images';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {USER_DATA} from '../../constants/user.const';

const defaultValue: IUserData = {
  username: '',
  password: '',
};

const keyboardVerticalOffset = Platform.OS === 'ios' ? 60 : 20;
const SignUpScreen = (): React.ReactElement => {
  const navigation = useNavigation<any>();
  const [isButtonActive, setIsButtonActive] = React.useState(false);
  const [userData, setUserData] = React.useState<IUserData>(defaultValue);
  const [wholeUserData, setWholeUserData] = React.useState<IUserData[]>([]);

  const onUserDataFilled = (user: IUserData, passWordTrue: boolean) => {
    let checkEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    let checkPass = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;

    if (checkEmail.test(user?.username) === true) {
      if (
        user?.password.length > 8 &&
        user?.password.match(checkPass) &&
        passWordTrue
      ) {
        setIsButtonActive(true);
      } else {
        setIsButtonActive(false);
      }
    } else {
      setIsButtonActive(false);
    }
    setUserData(user);
  };

  const onPressSignUp = () => {
    const userDatas = wholeUserData;

    userDatas.push(userData);
    AsyncStorage.setItem(USER_DATA, JSON.stringify(userDatas));
    navigation.navigate('login');
  };

  React.useEffect(() => {
    (async () => {
      const persistedUserData = await AsyncStorage.getItem(USER_DATA);
      if (persistedUserData) {
        setWholeUserData(JSON.parse(persistedUserData));
      }
    })();
  }, []);

  return (
    <Layouts style={styles.container}>
      <BackgroundImages style={GlobalStyle.styles.globalHeight}>
        <Layouts style={styles.containerBox}>
          <KeyboardAvoidingView
            behavior="padding"
            keyboardVerticalOffset={keyboardVerticalOffset}>
            <Layouts style={styles.imageContainer}>
              <Image style={styles.imageStyles} source={IMAGES.image.ICONWOM} />
            </Layouts>
            <FormSignUp
              onAllowedToRegister={(user, passWordTrue) =>
                onUserDataFilled(user, passWordTrue)
              }
            />
          </KeyboardAvoidingView>
          <ButtonActions
            isActiveButton={isButtonActive}
            onPress={onPressSignUp}
          />
        </Layouts>
      </BackgroundImages>
    </Layouts>
  );
};

export default SignUpScreen;
