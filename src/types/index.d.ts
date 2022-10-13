import React from 'react';
import type { ColorValue } from 'react-native';
import type { SvgProps } from 'react-native-svg';

declare module "*.svg" {
  const content: React.FC<SvgProps>;
  export default content;
}

export type DoodleProps = {
  strokeColor?: ColorValue;
  strokeWidth?: number;
};
