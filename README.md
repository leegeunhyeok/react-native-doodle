<div align="center">

  <img alt="title" src="https://user-images.githubusercontent.com/26512984/195677782-4cb280fd-39d0-4e23-81ba-a92f22dfe20f.png">

  A simple hand drawn theme for React Native

</div>

## Introduction

React Native component wrapper for hand drawn theming.

This project inspired by [Doodle CSS](https://chr15m.github.io/DoodleCSS) (By [Chris McCormick](https://mccormick.cx)).


<img alt="preview" width="300" src="https://user-images.githubusercontent.com/26512984/195677807-ecdd8339-06b8-428b-916d-a3aa0108e45d.png">

## Installation

```bash
npm install react-native-doodle
# or yarn
yarn add react-native-doodle
```

## Usage

```jsx
import { SafeAreaView, Text } from 'react-native';
import { View, Input, Button } from 'react-native-doodle';

const App = () => {
  return (
    <SafeAreaView>
      <View style={{ flex: 1 }}>
        <Button style={{ padding: 10 }}>
          <Text>Press Me!</Text>
        </Button>
        <Input
          containerStyle={{ padding: 10 }}
          placeholder="Type something.."
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
```

- `View`: same as [View](https://reactnative.dev/docs/view)
- `Input`: same as [TextInput](https://reactnative.dev/docs/textinput)
- `Button`: same as [Pressable](https://reactnative.dev/docs/pressable)

## License

[MIT](./LICENSE)
