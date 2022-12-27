import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Layouts from '../../../../components/layouts';
import {CREATE_ACCOUNT, LOGIN} from '../../../../constants/user.const';
import styles from './styles';

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
        <Text style={styles.loginText}>{LOGIN}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => onPressSignUp()}
        style={styles.signUpButton}>
        <Text style={styles.signUpText}>{CREATE_ACCOUNT}</Text>
      </TouchableOpacity>
    </Layouts>
  );
};

export default ButtonAction;
