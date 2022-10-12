import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  useColorScheme,
  Platform,
  Linking,
} from 'react-native';
import {View as DoodleView} from 'react-native-doodle';
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

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 16,
  },
  doodleText: {
    fontFamily: Platform.select({
      ios: 'Short Stack',
      android: 'ShortStack-Regular',
    }),
    fontSize: 16,
  },
  doodleView: {
    padding: 16,
  },
  section: {
    marginBottom: 24,
  },
  underline: {
    textDecorationLine: 'underline',
  },
  lightText: {
    color: '#e3e3e3',
  },
  darkText: {
    color: '#3c3c3c',
  },
  h1: {
    fontSize: 32,
    marginVertical: 16,
  },
  h2: {
    fontSize: 28,
    marginVertical: 16,
  },
  p: {
    fontSize: 16,
    marginVertical: 8,
  },
});

export default App;
