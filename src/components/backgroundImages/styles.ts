import {StyleSheet, ViewStyle} from 'react-native';

interface IStyles {
  layout: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  layout: {
    flex: 1,
    height: '100%',
  },
});

export default styles;
