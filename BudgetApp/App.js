import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App: () => Node = () => {

  return (
    <View style={styles.container}>
      <Text>
        Hello World
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 0,
    backgroundColor: 'white',

    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App;
