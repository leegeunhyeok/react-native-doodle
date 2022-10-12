import React from 'react';
import {Text, useColorScheme} from 'react-native';
import {styles} from '../styles';
import type {ComponentProps, PropsWithChildren} from 'react';

const DoodleText = ({
  children,
  ...props
}: PropsWithChildren<ComponentProps<typeof Text>>) => {
  const isDarkMode = useColorScheme() === 'dark';
  const textStyle = isDarkMode ? styles.lightText : styles.darkText;

  return (
    <Text {...props} style={[styles.doodleText, textStyle, props.style]}>
      {children}
    </Text>
  );
};

export default DoodleText;
