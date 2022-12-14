import React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import type { DoodleProps } from '../types';

const Rect2 = ({ strokeColor, strokeWidth, ...props }: SvgProps & Required<DoodleProps>) => (
  <Svg
    height="150"
    width="150"
    viewBox="0 0 150 150"
    {...props}
  >
    <Path
      vectorEffect="non-scaling-stroke"
      d="M21.67 2.146C7.147 1.956 1.326 1.19 1.414 14.213c-.032 33.17.776 29.273 1.087 59.674.123 9.558-.751 50.024-.754 57.53-.406 21.86 11.325 16.366 26.544 16.87 10.294.111 42.404-.345 56.618-.345 23.419.72 29.017-.038 41.842-.322 9.248-.417 20.465 2.37 21.101-7.962.092-14.104.304-32.32-.267-56.338-.076-20.623.844-44.546 1.005-63.353-.328-8.964 1.411-17.119-10.553-18.554-12.13.23-24.26.21-36.39.191-15.061.472-27.731-.496-41.855.018-8.492.043-16.83.224-25.256.394-4.364.088-12.628.092-13.793.117"
      fill="none"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
    />
  </Svg>
);

export default Rect2;
