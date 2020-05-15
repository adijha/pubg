import React from 'react';
import {StyleSheet, Image, ImageBackground} from 'react-native';
import Earncard from '../../in-component/Card_earnScreen';
import {Container, Content, Header, Title, Body, Thumbnail} from 'native-base';
import Sky from '../../../assets/sky.png';
const EarnScreen = (props) => {
  return (
    <Container style={styles.container}>
      <ImageBackground source={Sky} style={styles.image}>
        <Content>
          <Earncard
            onPress={() =>
              props.navigation.navigate('EarnDetails', {
                imageSource: '1',
                tournament: 'Gold',
              })
            }
            imageSource="1"
            likes="250"
            Tournament="Gold"
            People="40"
          />
          <Earncard
            onPress={() =>
              props.navigation.navigate('EarnDetails', {
                imageSource: '2',
                tournament: 'Silver',
              })
            }
            imageSource="2"
            likes="200"
            Tournament="Silver"
            People="60"
          />
          <Earncard
            onPress={() =>
              props.navigation.navigate('EarnDetails', {
                imageSource: '3',
                tournament: 'Bronze',
              })
            }
            imageSource="3"
            likes="20"
            Tournament="Bronze"
            People="80"
          />
        </Content>
      </ImageBackground>
    </Container>
  );
};

export default EarnScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
