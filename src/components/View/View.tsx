import React from 'react';
import { View } from 'react-native';
import { Rect1 as Border } from '../../assets';
import { SVG_CONTAINER_STYLE, DEFAULT_SVG_PROPS, DEFAULT_STROKE_COLOR, DEFAULT_STROKE_WIDTH } from '../../constants';
import type { ComponentProps } from 'react';
import type { DoodleProps } from '../../types';

type DoodleViewProps = ComponentProps<typeof View> & DoodleProps;

const DoodleView = ({ strokeColor = DEFAULT_STROKE_COLOR, strokeWidth = DEFAULT_STROKE_WIDTH, ...props }: DoodleViewProps) => (
  <View {...props}>
    <View style={SVG_CONTAINER_STYLE}>
      <Border {...DEFAULT_SVG_PROPS} strokeColor={strokeColor} strokeWidth={strokeWidth} />
    </View>
    {props.children}
  </View>
);

export default DoodleView;
