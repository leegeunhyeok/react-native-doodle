import React from 'react';
import { View as RNView } from 'react-native';
import { Rect1 as Border } from '../../assets';
import { SVG_CONTAINER_STYLE, DEFAULT_SVG_PROPS } from '../../constants';
import type { ComponentProps } from 'react';

type DoodleViewProps = ComponentProps<typeof RNView>;

const DoodleView = (props: DoodleViewProps) => (
  <RNView {...props}>
    <RNView style={SVG_CONTAINER_STYLE}>
      <Border {...DEFAULT_SVG_PROPS} />
    </RNView>
    {props.children}
  </RNView>
);

export default DoodleView;
