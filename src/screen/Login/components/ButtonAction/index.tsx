import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Layouts from '../../../../components/layouts';
import {CREATE_ACCOUNT, LOGIN} from '../../../../constants/user.const';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';

export interface IButtonSignUp {
  onPress?: (...args: any[]) => void;
  isActiveButton?: boolean;
}

const ButtonAction = ({
  isActiveButton,
  onPress,
}: IButtonSignUp): React.ReactElement => {
  const navigation = useNavigation<any>();
  const onPressSignUp = () => {
    navigation.navigate('signUp');
  };
  return (
    <Layouts style={styles.contentBox}>
      <TouchableOpacity
        disabled={!isActiveButton}
        onPress={isActiveButton ? onPress : () => {}}
        style={
          !isActiveButton ? styles.buttonLoginNoActive : styles.buttonLogin
        }>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={
            isActiveButton
              ? ['#0a6eb1', '#074d7c', '#053759', '#032135']
              : ['#b2b2b2', '#747474', '#3c3c3c']
          }
          style={styles.buttonLoginNoActive}>
          <Text style={styles.loginText}>{LOGIN}</Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => onPressSignUp()}
        style={styles.signUpButton}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={['#0a6eb1', '#074d7c', '#053759', '#032135']}
          style={styles.buttonLoginNoActive}>
          <Text style={styles.signUpText}>{CREATE_ACCOUNT}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </Layouts>
  );
};

// kedepanya kita bisa buat component sendiiri untuk buttonGradient

export default ButtonAction;
