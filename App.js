import React from 'react';
import {StyleSheet, SafeAreaView, View, Text} from 'react-native';
import MainNavigator from './src/navigation/mainNavigator';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <MainNavigator />
    </SafeAreaView>
  );
}
