import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  Text,
  useColorScheme,
  Linking,
} from 'react-native';
import {View as DoodleView} from 'react-native-doodle';
import {styles} from './src/styles';
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

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#333' : '#fff',
  };

  const handlePressAuthor = () => {
    Linking.openURL('https://github.com/leegeunhyeok');
  };

  const handlePressGitHub = () => {
    Linking.openURL('https://github.com/leegeunhyeok/react-native-doodle');
  };

  return (
    <SafeAreaView style={[styles.flex, backgroundStyle]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.container}>
        <View style={styles.section}>
          <DoodleText style={styles.h1}>react-native-doodle</DoodleText>
          <DoodleText style={styles.p}>
            A simple hand drawn theme for React Native.
          </DoodleText>
          <DoodleText style={styles.p}>
            By{' '}
            <DoodleText style={styles.underline} onPress={handlePressAuthor}>
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
        <View style={styles.section}>
          <DoodleText style={styles.h2}>Quick Demo</DoodleText>
          <DoodleView style={styles.doodleView}>
            <DoodleText>wip..</DoodleText>
          </DoodleView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
