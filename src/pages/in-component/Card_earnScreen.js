import React from 'react';
import {StyleSheet, Image, TouchableOpacity,View} from 'react-native';
import {
  Card,
  CardItem,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  Accordion
 
} from 'native-base';

const Card_earnScreen = props => {
  const images = {
    '1': 'https://wallpapercave.com/wp/wp2208669.png',
    '2': 'https://wallpapercave.com/wp/wp3276763.jpg',
    '3': 'https://wallpapercave.com/wp/wp1964365.png',
  };

  const dataArray = [
    { title: "Date Schedule", content: "Starting from 22/08/2020 and will be ended in 7 days" },
   
  ];

  return (
    <TouchableOpacity style={{borderRadius:20,margin:20}} 
      onPress={props.onPress}>
      <Card style={{borderRadius:20}}   >

      <Accordion
            dataArray={dataArray}
            headerStyle={{ backgroundColor: "#b7daf8" }}
            contentStyle={{ backgroundColor: "#ddecf8" }}
          />

        <CardItem cardBody style={{borderRadius:20}}>
          <Image  source={{uri: images[props.imageSource]}} style={styles.img} />
        </CardItem>
        <CardItem>
          <Left>
            <Button>
              <Icon active name="wallet" />
              <Text>{props.likes}</Text>
            </Button>
          </Left>
          <Body
            style={{
              paddingLeft: 40,
            }}>
            <Text>Pubg {props.Tournament} Tournament</Text>
          </Body>
          <Right>
            <Icon active name="ios-people" />
            <Text>{props.People}</Text>
            
          </Right>
         
        </CardItem>
        <Button block>
            <Text>Enter</Text>
          </Button>
      </Card>
    </TouchableOpacity>
  );
};

export default Card_earnScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    backgroundColor: '#ebf0f7',
  },
  contentList: {
    flex: 1,
  },
  img: {height: 200, width: null, flex: 1},
});
