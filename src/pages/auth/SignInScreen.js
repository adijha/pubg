import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard } from 'react-native';

export default function SignInScreen(props) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState(null);

	const onSubmit = async (event) => {
		event.preventDefault();
	console.log(email,password)
  };

	return (
		<View style={styles.container}>
			<Text style={styles.greeting}> {`Hello again.\nWelcome back.`} </Text>
			<View style={styles.errorMessage}>
				{errorMessage ? <Text style={styles.error}> {errorMessage} </Text> : null}
			</View>
			<View style={styles.form}>
				<View>
					<Text style={styles.inputTitle}> Email Address </Text>
					<TextInput style={styles.input} autoCapitalize='none' onChangeText={(email) => setEmail(email)} />
				</View>
				<View
					style={{
						marginTop: 32
					}}
				>
					<Text style={styles.inputTitle}> Password </Text>
					<TextInput
						style={styles.input}
						secureTextEntry
						autoCapitalize='none'
						onChangeText={(password) => setPassword(password)}
					/>
				</View>
			</View>
			<TouchableOpacity style={styles.button} onPress={onSubmit}>
				<Text
					style={{
						color: '#FFF',
						fontWeight: '500'
					}}
				>
					Sign in
				</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={{
					marginHorizontal: 30,
					marginTop: 12
				}}
				onPress={() => {
					props.navigation.navigate('ResetPassword');
					Keyboard.dismiss();
				}}
			>
				<Text
					style={{
						color: '#414959',
						fontSize: 13
					}}
				>
					Forgot your password ?
				</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={{
					alignSelf: 'center',
					marginTop: 42
				}}
				onPress={() => {
					props.navigation.navigate('SignUp');
					Keyboard.dismiss();
				}}
			>
				<Text
					style={{
						color: '#414959',
						fontSize: 13
					}}
				>
					New to Pubg App?
					<Text
						style={{
							fontWeight: '500',
							color: '#6CBAD9'
						}}
					>{" "}Sign Up
					</Text>
				</Text>
			</TouchableOpacity>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 80
	},
	greeting: {
		marginTop: 32,
		fontSize: 18,
		fontWeight: '400',
		textAlign: 'center'
	},
	errorMessage: {
		height: 72,
		alignItems: 'center',
		justifyContent: 'center',
		marginHorizontal: 30
	},
	error: {
		color: '#6CBAD9',
		fontSize: 13,
		fontWeight: '600',
		textAlign: 'center'
	},
	form: {
		marginBottom: 48,
		marginHorizontal: 30
	},
	inputTitle: {
		color: '#8A8F9E',
		fontSize: 10,
		textTransform: 'uppercase'
	},
	input: {
		borderBottomColor: '#8A8F9E',
		borderBottomWidth: StyleSheet.hairlineWidth,
		height: 40,
		fontSize: 15,
		color: '#161F3D'
	},
	button: {
		marginHorizontal: 30,
		backgroundColor: '#6CBAD9',
		borderRadius: 4,
		height: 52,
		alignItems: 'center',
		justifyContent: 'center'
	}
});