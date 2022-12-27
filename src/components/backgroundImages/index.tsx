import * as React from 'react';
import {View, ViewProps, ViewStyle, ImageBackground} from 'react-native';
import {IMAGES} from '../../utils/images';
import defaultStyles from './styles';

export interface ILayout extends ViewProps {
  testID?: string;
  children?: React.ReactNode;
  style?: ViewStyle | ViewStyle[];
}

const BackgroundImages = ({
  testID,
  children,
  style,
  ...viewProps
}: ILayout): React.ReactElement => (
  <View testID={testID} style={[defaultStyles.layout, style]} {...viewProps}>
    <ImageBackground
      style={[defaultStyles.layout, style]}
      source={IMAGES.image.BG_IMAGE_1}>
      {children}
    </ImageBackground>
  </View>
);

export default React.memo(BackgroundImages);
