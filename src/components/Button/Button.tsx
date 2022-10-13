import React from 'react';
import { View, Pressable } from 'react-native';
import { Rect2 as Border } from '../../assets';
import {
  SVG_CONTAINER_STYLE,
  DEFAULT_SVG_PROPS,
  DEFAULT_STROKE_COLOR,
  DEFAULT_STROKE_WIDTH,
} from '../../constants';
import type { ComponentProps } from 'react';
import type { DoodleProps } from '../../types';

type DoodleButtonProps = ComponentProps<typeof Pressable> & DoodleProps;

const DoodleButton = ({
  strokeColor = DEFAULT_STROKE_COLOR,
  strokeWidth = DEFAULT_STROKE_WIDTH,
  ...props
}: DoodleButtonProps) => (
  <Pressable {...props}>
    <>
      <View style={SVG_CONTAINER_STYLE}>
        <Border
          {...DEFAULT_SVG_PROPS}
          strokeColor={strokeColor}
          strokeWidth={strokeWidth}
        />
      </View>
      {props.children}
    </>
  </Pressable>
);

export default DoodleButton;
