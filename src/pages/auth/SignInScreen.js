import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ActivityIndicator,
} from 'react-native';
import {Button} from 'native-base';
import AuthApi from '../../api/Auth';
import AsyncStorage from '@react-native-community/async-storage';

export default function SignInScreen(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const onSubmit = async event => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await AuthApi.post('/signin', {email, password});
      await AsyncStorage.setItem('token', response.data.token);
      setLoading(false);
      props.navigation.navigate('Earn');
    } catch (err) {
      setErrorMessage('Something went wrong');
      setLoading(false);
      console.log('Error', err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}> {`Hello again.\nWelcome back.`} </Text>
      <View style={styles.errorMessage}>
        {errorMessage ? (
          <Text style={styles.error}> {errorMessage} </Text>
        ) : null}
      </View>
      <View style={styles.form}>
        <View>
          <Text style={styles.inputTitle}> Email Address </Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            onChangeText={email => setEmail(email)}
          />
        </View>
        <View
          style={{
            marginTop: 32,
          }}>
          <Text style={styles.inputTitle}> Password </Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            autoCapitalize="none"
            onChangeText={password => setPassword(password)}
          />
        </View>
      </View>

      {!loading ? (
        <TouchableOpacity style={styles.button} onPress={onSubmit}>
          <Text
            style={{
              color: '#FFF',
              fontWeight: '500',
            }}>
            Sign in
          </Text>
        </TouchableOpacity>
      ) : (
        <Button
          rounded
          info
          style={{width: 46, justifyContent: 'center', alignSelf: 'center'}}>
          <ActivityIndicator size="large" color="white" />
        </Button>
      )}
      {loading ? null : (
        <TouchableOpacity
          style={{
            marginHorizontal: 30,
            marginTop: 12,
          }}
          onPress={() => {
            // props.navigation.navigate('ResetPassword');
            Keyboard.dismiss();
          }}>
          <Text
            style={{
              color: '#414959',
              fontSize: 13,
            }}>
            Forgot your password ?
          </Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity
        style={{
          alignSelf: 'center',
          marginTop: 42,
        }}
        onPress={() => {
          props.navigation.navigate('SignUp');
          Keyboard.dismiss();
        }}>
        <Text
          style={{
            color: '#414959',
            fontSize: 13,
          }}>
          New to Pubg App?
          <Text
            style={{
              fontWeight: '500',
              color: '#6CBAD9',
            }}>
            {' '}
            Sign Up
          </Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
  },
  greeting: {
    marginTop: 32,
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
  },
  errorMessage: {
    height: 72,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  error: {
    color: '#6CBAD9',
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center',
  },
  form: {
    marginBottom: 48,
    marginHorizontal: 30,
  },
  inputTitle: {
    color: '#8A8F9E',
    fontSize: 10,
    textTransform: 'uppercase',
  },
  input: {
    borderBottomColor: '#8A8F9E',
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: '#161F3D',
  },
  button: {
    marginHorizontal: 30,
    backgroundColor: '#6CBAD9',
    borderRadius: 4,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
