import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Root } from './src/navigation/Root';
import { Colors } from "./src/utils/colors";

export const App = () =>
  {
    return (
      <SafeAreaProvider style={styles.container}>
        <Root/>
      </SafeAreaProvider>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primeBlack,
  }
});