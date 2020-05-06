import React from 'react'
import { StyleSheet,  View ,Image } from 'react-native'
import { Container, Header, Content, Card, CardItem,  Text, Button, Icon, Left, Body, Right } from 'native-base';

const Card_earnScreen = (props) => {

  const images={
    "1":'https://wallpapercave.com/wp/wp2208669.png',
    "2":'https://wallpapercave.com/wp/wp3276763.jpg',
    "3":'https://wallpapercave.com/wp/wp1964365.png',
  }
  return (
    
     
        
        <Card>
       
            
            <CardItem cardBody>
              <Image source={{uri:images[props.imageSource]}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button>
                  <Icon active name="wallet"/>
                  <Text>{props.likes}</Text>
                </Button>
              </Left>
              <Body style={{
                     paddingLeft:40,    }}>
                
                 
                  <Text>Pubg {props.Tournament} tournament</Text>
                
              </Body>
              <Right>
              <Icon active name="ios-people" />
              <Text>{props.People}</Text>
              </Right>
            </CardItem>
          </Card>
       
      
    
  )
}

export default Card_earnScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    backgroundColor: "#ebf0f7"
  },
  contentList: {
    flex: 1,
  }
})
