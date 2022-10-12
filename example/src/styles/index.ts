import {StyleSheet, Platform} from 'react-native';

export const styles = StyleSheet.create({
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
