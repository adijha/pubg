import React, {useEffect} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
export default function LoadingScreen(props) {
  const tryLogin = async () => {
    let email = await AsyncStorage.getItem('email');
    let password = await AsyncStorage.getItem('password');
    if (email != null && password != null) {
      try {
        // await Api.user.login(decrypt(email), decrypt(password));
        // await getUser();
        props.navigation.navigate('Earn');
      } catch (error) {
        props.navigation.navigate('SignIn');
      }
    } else {
      props.navigation.navigate('SignIn');
    }
  };
  // useEffect(() => {
  //   tryLogin()
  // }, [])

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
