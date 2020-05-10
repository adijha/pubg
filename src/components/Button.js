import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import MaterialButtonPurple from './components/MaterialButtonPurple';

function Index(props) {
  return (
    <View style={styles.container}>
      <MaterialButtonPurple style={styles.materialButtonPurple} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 36,
  },
  materialButtonPurple: {
    width: 100,
    height: 36,
  },
});

export default Index;
