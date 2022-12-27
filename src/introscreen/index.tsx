import * as React from 'react';
import {SafeAreaView, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {IMAGES} from '../utils/images';

const IntroScreen = (): React.ReactElement => {
  const navigation = useNavigation<any>();
  React.useEffect(() => {
    setTimeout(() => {
      navigation.navigate('login');
    }, 1500);
  });
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={IMAGES.image.ICONWOM}
        resizeMode="center"
        style={styles.imgLogo}
      />
    </SafeAreaView>
  );
};

export default IntroScreen;
