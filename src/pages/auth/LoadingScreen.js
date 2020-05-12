import React, {useEffect} from 'react';
import {View, Text, StyleSheet, ActivityIndicator, Image} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import pubg from '../../assets/icons/pubg.png';
export default function LoadingScreen(props) {
  const tryLogin = async () => {
    setTimeout(async () => {
      const token = await AsyncStorage.getItem('token');
      props.navigation.navigate(token ? 'Earn' : 'SignIn');
    }, 1000);
  };
  useEffect(() => {
    tryLogin();
  }, []);

  return (
    <View style={styles.container}>
      {/* <Text>Loading</Text> */}
      <Image source={pubg} />
      {/* <ActivityIndicator size="large" /> */}
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
