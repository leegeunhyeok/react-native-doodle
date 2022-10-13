import React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import type { DoodleProps } from '../types';

const Circle = ({ strokeColor, strokeWidth, ...props }: SvgProps & Required<DoodleProps>) => (
  <Svg
    height="150"
    width="150"
    viewBox="0 0 150 150"
    {...props}
  >
    <Path
      vectorEffect="non-scaling-stroke"
      d="M25.652 12.103c-6.082 3.476-7.2 6.18-13.341 14.92C5.07 38.034 2.658 42.35 1.373 70.367c.433 19.516 3.5 30.4 7.791 42.527 6.266 12.557 6.385 12.14 17.771 22.3 12.938 6.697 16.84 13.434 47.379 13.434 20.402-2.277 27.133-3.378 40.664-7.896 11.615-4.906 18.431-10.679 21.9-21.363 4.658-12.965 11.594-25.949 11.75-44.233 0-26.63-4.945-36.373-10.474-44.681-8.36-12.148-9.116-11.469-17.45-17.297-14.6-7.586-15.662-8.771-31.166-10.451-14.436-1.828-28.187-1.728-39.285 0-9.735 1.515-18.127 4.838-25.463 9.917"
      fill="none"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
    />
  </Svg>
);

export default Circle;
