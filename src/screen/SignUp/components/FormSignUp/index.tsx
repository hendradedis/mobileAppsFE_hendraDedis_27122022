/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import {Text, TextInput, TouchableOpacity} from 'react-native';
import Layouts from '../../../../components/layouts';
import styles from './styles';
import {
  MUSTEMAIL,
  MUSTSAME,
  PASSWORD,
  PLACEHOLDERUSER,
  ReTYPE,
  USERNAME,
  VALIDATEPASS,
} from '../../../../constants/user.const';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export interface IUserData {
  username: string;
  password: string;
}

interface IFormSignUp {
  onAllowedToRegister: (user: IUserData, passWordTrue: boolean) => void;
}

const FormSignUp = ({onAllowedToRegister}: IFormSignUp): React.ReactElement => {
  const [password, setPassword] = React.useState(true);
  const [passWordTrue, setPassWordTrue] = React.useState(false);
  const [reTypePass, setReTypePass] = React.useState(true);
  const [userData, setUserData] = React.useState<IUserData>({
    password: '',
    username: '',
  });

  React.useEffect(() => {
    setUserData(userData);
    onAllowedToRegister(userData, passWordTrue);
  }, [userData, passWordTrue]);

  return (
    <Layouts style={styles.containerBox}>
      <Layouts>
        <Text style={styles.emailText}>{USERNAME}</Text>
        <TextInput
          maxLength={50}
          onChangeText={text =>
            setUserData({
              ...userData,
              username: text,
            })
          }
          placeholder={PLACEHOLDERUSER}
          style={styles.inputStyleEmail}
        />
        <Text style={styles.textWarning}>{MUSTEMAIL}</Text>
      </Layouts>
      <Layouts>
        <Text style={styles.passText}>{PASSWORD}</Text>
        <Layouts style={styles.inputStylePass}>
          <Layouts style={styles.inputBox}>
            <TextInput
              maxLength={50}
              onChangeText={text =>
                setUserData({
                  ...userData,
                  password: text,
                })
              }
              secureTextEntry={password}
              placeholder="********"
            />
          </Layouts>
          <TouchableOpacity
            onPress={() => setPassword(!password)}
            style={styles.icons}>
            <FontAwesome
              name={password ? 'eye-slash' : 'eye'}
              size={18}
              color={password ? '#c4c4c4' : '#000000'}
            />
          </TouchableOpacity>
        </Layouts>
        <Text style={styles.textWarning}>{VALIDATEPASS}</Text>
        <Layouts style={styles.boxRetype}>
          <Text style={styles.passText}>{ReTYPE}</Text>
          <Layouts style={styles.inputRetype}>
            <Layouts style={styles.inputBox}>
              <TextInput
                maxLength={50}
                onChangeText={text => {
                  if (text === userData?.password) {
                    setPassWordTrue(true);
                  } else {
                    setPassWordTrue(false);
                  }
                }}
                secureTextEntry={reTypePass}
                placeholder="********"
              />
            </Layouts>
            <TouchableOpacity
              onPress={() => setReTypePass(!reTypePass)}
              style={styles.icons}>
              <FontAwesome
                name={reTypePass ? 'eye-slash' : 'eye'}
                size={18}
                color={reTypePass ? '#c4c4c4' : '#000000'}
              />
            </TouchableOpacity>
          </Layouts>
          <Text style={styles.textWarning}>{MUSTSAME}</Text>
        </Layouts>
      </Layouts>
    </Layouts>
  );
};

export default FormSignUp;
