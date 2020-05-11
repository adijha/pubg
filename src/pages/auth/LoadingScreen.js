import React, {useEffect} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
export default function LoadingScreen(props) {
  const tryLogin = async () => {
    const token = await AsyncStorage.getItem('token');
    props.navigation.navigate(token ? 'Earn' : 'SignIn');
  };
  useEffect(() => {
    tryLogin();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Loading</Text>
      <ActivityIndicator size="large" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
