import React from 'react';
import { View as RNView } from 'react-native';
import { Rect1 as Border } from '../../assets';
import { SVG_CONTAINER_STYLE, DEFAULT_SVG_PROPS, DEFAULT_STROKE_COLOR } from '../../constants';
import type { ComponentProps } from 'react';
import type { DoodleProps } from '../../types';

type DoodleViewProps = ComponentProps<typeof RNView> & DoodleProps;

const DoodleView = ({ strokeColor = DEFAULT_STROKE_COLOR, strokeWidth = DEFAULT_STROKE_COLOR, ...props }: DoodleViewProps) => (
  <RNView {...props}>
    <RNView style={SVG_CONTAINER_STYLE}>
      <Border {...DEFAULT_SVG_PROPS} strokeColor={strokeColor} strokeWidth={strokeWidth} />
    </RNView>
    {props.children}
  </RNView>
);

export default DoodleView;
