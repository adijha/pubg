import React, {useState} from 'react';
import {StyleSheet, View, Image, ActivityIndicator} from 'react-native';
import {
  Container,
  Header,
  Tab,
  Tabs,
  TabHeading,
  Icon,
  Text,
  Left,
  Right,
  Body,
  Title,
  Button,
} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';

export default function Profile(props) {
  const [loading, setLoading] = useState(false);

  return (
    <Container>
      <Header hasTabs>
        <Body style={{alignItems: 'center'}}>
          <Title style={{color: 'white'}}>Profile</Title>
        </Body>
      </Header>
      <View style={styles.header} />
      <Image
        style={styles.avatar}
        source={{uri: 'https://adijha.com/profile.jpg'}}
      />
      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <Text style={styles.name}>Aditya Kumar Jha</Text>
          <Text style={styles.info}>Web Develoer / Mobile developer</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum
            electram expetendis, omittam deseruisse consequuntur ius an,
          </Text>
          <Button
            full
            rounded
            info
            style={{
              backgroundColor: '#3E69B9',
              marginVertical: 30,
            }}>
            <Text style={{color: 'white'}}>Reset Password</Text>
          </Button>
          {!loading ? (
            <Button
              full
              rounded
              info
              style={{
                backgroundColor: '#3E69B9',
              }}
              onPress={async () => {
                setLoading(true);
                await AsyncStorage.removeItem('token');
                props.navigation.navigate('SignIn');
                setLoading(false);
              }}>
              <Text style={{color: 'white'}}>Log Out</Text>
            </Button>
          ) : (
            <Button
              rounded
              info
              style={{
                width: 46,
                justifyContent: 'center',
              }}>
              <ActivityIndicator size="large" color="white" />
            </Button>
          )}
        </View>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#3E69B9',
    height: 140,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 125,
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: '#696969',
    fontWeight: '600',
  },
  info: {
    fontSize: 16,
    color: '#3E69B9',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: '#696969',
    marginTop: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: '#00BFFF',
  },
});
