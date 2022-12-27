import {StyleSheet, ViewStyle} from 'react-native';

interface IStyles {
  layout: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  layout: {
    backgroundColor: 'transparent',
  },
});

export default styles;
