import React, {useState} from 'react';
import {FlatList, StyleSheet, Image, View, Text} from 'react-native';
// import {Container, Header, Body, Title, Text} from 'native-base';
import Intro from '../../../assets/intro.jpg';
import Card from '../../../components/Card';
const PlayScreen = () => {
  return (
    <View style={{backgroundColor: '#23283B', flex: 1}}>
      {/* <Header hasTabs style={{marginBottom: 10, backgroundColor: '#23283B'}}>
        <Body style={{alignItems: 'left'}}>
          <Title style={{color: 'white'}}>Play</Title>
        </Body>
      </Header> */}
      <Card img={Intro} text="PUBG MOBILE" />
      <Card img={Intro} text="PUBG MOBILE" />
      <Card img={Intro} text="PUBG MOBILE" />
    </View>
  );
};
const styles = StyleSheet.create({});

export default PlayScreen;
