/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import {Text, TextInput, TouchableOpacity} from 'react-native';
import Layouts from '../../../../components/layouts';
import styles from './styles';
import {
  PASSWORD,
  PLACEHOLDERUSER,
  USERNAME,
} from '../../../../constants/user.const';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {IUserData} from '../../../SignUp/components/FormSignUp';

interface IFormSignIn {
  onUserData: (user: IUserData) => void;
}

const defaultValue = {
  password: '',
  username: '',
};

const FormLogin = ({onUserData}: IFormSignIn): React.ReactElement => {
  const [password, setPassword] = React.useState(true);
  const [userData, setUserData] = React.useState<IUserData>(defaultValue);

  React.useEffect(() => {
    onUserData(userData);
  }, [userData]);

  return (
    <Layouts style={styles.containerBox}>
      <Layouts style={styles.contentBox}>
        <Text style={styles.emailText}>{USERNAME}</Text>
        <TextInput
          placeholder={PLACEHOLDERUSER}
          maxLength={50}
          value={userData.username}
          style={styles.inputStyleEmail}
          onChangeText={text =>
            setUserData({
              ...userData,
              username: text,
            })
          }
        />
      </Layouts>
      <Layouts>
        <Text style={styles.passText}>{PASSWORD}</Text>
        <Layouts style={styles.inputStylePass}>
          <Layouts style={styles.inputBox}>
            <TextInput
              onChangeText={text =>
                setUserData({
                  ...userData,
                  password: text,
                })
              }
              value={userData.password}
              maxLength={50}
              secureTextEntry={password}
              placeholder="********"
            />
          </Layouts>
          <TouchableOpacity
            onPress={() => setPassword(!password)}
            style={styles.icons}>
            <FontAwesome
              name={password ? 'eye-slash' : 'eye'}
              size={20}
              color={password ? '#c4c4c4' : '#000000'}
            />
          </TouchableOpacity>
        </Layouts>
      </Layouts>
    </Layouts>
  );
};

export default FormLogin;
