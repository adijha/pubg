import React from 'react';
import {StyleSheet, Image , ImageBackground} from 'react-native';
import Earncard from '../../in-component/Card_earnScreen';
import {Container, Content, Header, Title, Body,Thumbnail} from 'native-base';
const EarnScreen = props => {
  const image = { uri: "https://cdn.pixabay.com/photo/2014/04/08/19/38/sky-319546__340.png" };
  const uri = { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQlgqtqp6FvuFUb2uKQcYZwyvO17uDEILepLht7qBc9FW441Q-5&usqp=CAU" };
  return (
    <Container style={styles.container}>
      <Header hasTabs>
        <Body style={{alignItems: 'center',flex: 1,flexDirection:"row",padding:30}}>

        <Thumbnail  small source={uri} style={{paddingRight:10}} />
          <Title style={{color: 'white',paddingLeft:40}}>Earn</Title>

        </Body>
      </Header>
      <ImageBackground source={ image} style={styles.image}>
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
    resizeMode: "cover",
    justifyContent: "center"
  },
});
