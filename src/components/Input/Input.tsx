import React from 'react';
import { View, TextInput } from 'react-native';
import { Rect1 as Border } from '../../assets';
import { SVG_CONTAINER_STYLE, DEFAULT_SVG_PROPS, DEFAULT_STROKE_COLOR, DEFAULT_STROKE_WIDTH } from '../../constants';
import type { ComponentProps } from 'react';
import type { DoodleProps } from '../../types';

type DoodleInputProps = ComponentProps<typeof TextInput> & DoodleProps & {
  containerStyle?: ComponentProps<typeof View>
};

const DoodleInput = ({ strokeColor = DEFAULT_STROKE_COLOR, strokeWidth = DEFAULT_STROKE_WIDTH, containerStyle, ...props }: DoodleInputProps) => (
  <View style={containerStyle}>
    <View style={SVG_CONTAINER_STYLE}>
      <Border {...DEFAULT_SVG_PROPS} strokeColor={strokeColor} strokeWidth={strokeWidth} />
    </View>
    <TextInput {...props} />
  </View>
);

export default DoodleInput;
