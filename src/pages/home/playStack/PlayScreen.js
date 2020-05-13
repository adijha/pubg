import React from 'react';
import {TouchableOpacity, StyleSheet, Image, View,Text} from 'react-native';
// import {Container, Header, Body, Title, Text} from 'native-base';
import Intro from '../../../assets/intro.jpg';
import Card from '../../../components/Card';
const TabsAdvancedExample = () => {
  return (
    <View style={{backgroundColor: '#23283B', flex: 1}}>
      {/* <Header hasTabs style={{marginBottom: 10, backgroundColor: '#23283B'}}>
        <Body style={{alignItems: 'left'}}>
          <Title style={{color: 'white'}}>Play</Title>
        </Body>
      </Header> */}
      <TouchableOpacity style={styles.card}>
        <Image source={Intro} style={styles.image} />
        <Text style={styles.text}>PUBG MOBILE</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card}>
        <Image source={Intro} style={styles.image} />
        <Text style={styles.text}>PUBG MOBILE</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card}>
        <Image source={Intro} style={styles.image} />
        <Text style={styles.text}>PUBG MOBILE</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#3F4869',
    marginBottom: 15,
    marginLeft: '3%',
    width: '94%',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 1,
    shadowOffset: {
      width: 3,
      height: 3,
    },
  },
  text: {
    padding: 10,
    fontSize: 16,
    color: 'white',
    alignSelf: 'center',
  },
  image: {
    width: '100%',
    resizeMode: 'cover',
    height: 200,
  },
});

export default TabsAdvancedExample;
