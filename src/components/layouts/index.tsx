import * as React from 'react';
import {View, ViewProps, ViewStyle, StatusBar} from 'react-native';
import defaultStyles from './styles';

export interface ILayout extends ViewProps {
  testID?: string;
  children?: React.ReactNode;
  style?: ViewStyle | ViewStyle[];
  trasparentHeader?: boolean;
}
interface IOptions {
  statusBars?: string;
  backgroundColor?: string;
}

const MyStatusBar = ({backgroundColor}: IOptions) => {
  return (
    <View>
      <StatusBar translucent backgroundColor={backgroundColor} />
    </View>
  );
};

const Layout = ({
  testID,
  children,
  style,
  trasparentHeader,
  ...viewProps
}: ILayout): React.ReactElement => (
  <View testID={testID} style={[defaultStyles.layout, style]} {...viewProps}>
    <MyStatusBar
      backgroundColor={trasparentHeader === true ? 'transparent' : '#00436f'}
    />
    {children}
  </View>
);

export default React.memo(Layout);
