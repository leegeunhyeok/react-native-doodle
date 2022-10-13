import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  useColorScheme,
  Alert,
} from 'react-native';
import {View as DoodleView, Button, Input} from 'react-native-doodle';
import {Description, DoodleText} from './src/components';
import {styles} from './src/styles';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#333' : '#fff',
  };
  const strokeColor = isDarkMode ? '#e3e3e3' : '#333';

  const handlePressButton = () => Alert.alert('Hello!');

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
          <DoodleView strokeColor={strokeColor} style={styles.doodleView}>
            <DoodleText style={styles.h3}>An Input</DoodleText>
            <View style={styles.row}>
              <Input
                placeholder="Type something.."
                strokeColor={strokeColor}
                placeholderTextColor="#888"
                containerStyle={styles.inputStyle}
                style={styles.doodleText}
              />
            </View>
            <DoodleText style={styles.h3}>A Textarea</DoodleText>
            <View style={styles.row}>
              <Input
                multiline
                placeholder="Type something.."
                strokeColor={strokeColor}
                placeholderTextColor="#888"
                containerStyle={styles.textareaStyle}
                style={[styles.doodleText, {height: '100%'}]}
              />
            </View>
            <View style={styles.row}>
              <Button strokeColor={strokeColor} style={styles.buttonStyle}>
                <DoodleText onPress={handlePressButton}>A Button</DoodleText>
              </Button>
            </View>
          </DoodleView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
