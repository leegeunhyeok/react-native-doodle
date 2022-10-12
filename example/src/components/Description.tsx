import React from 'react';
import {View, Linking} from 'react-native';
import {styles} from '../styles';
import DoodleText from './DoodleText';

const PACKAGE_NAME = 'react-native-doodle';
const PROFILE_URL = 'https://github.com/leegeunhyeok';

const Description = () => {
  const handlePressProfile = () => {
    Linking.openURL(PROFILE_URL);
  };

  const handlePressGitHub = () => {
    Linking.openURL(`${PROFILE_URL}/${PACKAGE_NAME}`);
  };

  return (
    <View style={styles.section}>
      <DoodleText style={styles.h1}>react-native-doodle</DoodleText>
      <DoodleText style={styles.p}>
        A simple hand drawn theme for React Native.
      </DoodleText>
      <DoodleText style={styles.p}>
        By{' '}
        <DoodleText style={styles.underline} onPress={handlePressProfile}>
          Geunhyeok LEE (@leegeunhyeok)
        </DoodleText>
      </DoodleText>
      <DoodleText style={styles.p}>
        Get the{' '}
        <DoodleText style={styles.underline} onPress={handlePressGitHub}>
          source code on GitHub.
        </DoodleText>
      </DoodleText>
    </View>
  );
};

export default Description;
