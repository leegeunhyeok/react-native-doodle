import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  useColorScheme,
} from 'react-native';
import {View as DoodleView} from 'react-native-doodle';
import {Description, DoodleText} from './src/components';
import {styles} from './src/styles';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#333' : '#fff',
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
        <Description />
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
