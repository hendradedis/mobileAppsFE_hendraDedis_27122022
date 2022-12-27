import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Layouts from '../../../../components/layouts';
import {CREATE_ACCOUNT} from '../../../../constants/user.const';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';

export interface IButtonSignUp {
  onPress?: (...args: any[]) => void;
  isActiveButton?: boolean;
}

const ButtonActions = ({
  isActiveButton,
  onPress,
}: IButtonSignUp): React.ReactElement => {
  const navigation = useNavigation<any>();
  const onPressSignUp = () => {
    navigation.pop();
  };
  return (
    <Layouts style={styles.contentBox}>
      <TouchableOpacity
        disabled={!isActiveButton}
        onPress={isActiveButton ? onPress : () => {}}
        style={
          !isActiveButton ? styles.buttonLoginNoActive : styles.buttonLogin
        }>
        <Text style={styles.loginText}>{CREATE_ACCOUNT}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => onPressSignUp()}
        style={styles.signUpButton}>
        <AntDesign name="arrowleft" size={30} color="#ffffff" />
      </TouchableOpacity>
    </Layouts>
  );
};

export default ButtonActions;
