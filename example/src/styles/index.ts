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
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 16,
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
  h3: {
    fontSize: 20,
    marginVertical: 8,
  },
  p: {
    fontSize: 16,
    marginVertical: 8,
  },
  inputStyle: {
    width: '100%',
    padding: 10,
  },
  textareaStyle: {
    padding: 10,
    width: '100%',
    height: 100,
  },
  buttonStyle: {
    padding: 10,
  },
});
