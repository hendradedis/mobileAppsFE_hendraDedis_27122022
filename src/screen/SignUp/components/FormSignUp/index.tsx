import * as React from 'react';
import {Text, TextInput, TouchableOpacity} from 'react-native';
import Layouts from '../../../../components/layouts';
import {moderateScale} from 'react-native-size-matters';
import styles from './styles';
import {
  PASSWORD,
  PLACEHOLDERUSER,
  ReTYPE,
  USERNAME,
} from '../../../../constants/user.const';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export interface IUserData {
  username: string;
  password: string;
}

interface IFormSignUp {
  onAllowedToRegister: (user: IUserData, canRegister: boolean) => void;
}

const FormSignUp = ({onAllowedToRegister}: IFormSignUp): React.ReactElement => {
  const [password, setPassword] = React.useState(true);
  const [reTypePass, setReTypePass] = React.useState(true);
  const [userData, setUserData] = React.useState<IUserData>({
    password: '',
    username: '',
  });
  return (
    <Layouts style={styles.containerBox}>
      <Layouts style={{marginBottom: moderateScale(16)}}>
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
        <Text style={styles.textWarning}>must email active</Text>
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
        <Text style={styles.textWarning}>
          password greater than 8 in total and uppercase, lowercase and numbers
        </Text>
        <Layouts>
          <Text style={[styles.passText, {marginTop: moderateScale(10)}]}>
            {ReTYPE}
          </Text>
          <Layouts style={styles.inputRetype}>
            <Layouts style={styles.inputBox}>
              <TextInput
                maxLength={50}
                onChangeText={text => {
                  if (text === userData?.password) {
                    onAllowedToRegister(userData, true);
                  } else {
                    onAllowedToRegister(userData, false);
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
          <Text style={styles.textWarning}>password must be the same</Text>
        </Layouts>
      </Layouts>
    </Layouts>
  );
};

export default FormSignUp;
