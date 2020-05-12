import React from 'react';
import {StyleSheet, Image} from 'react-native';
import Earncard from '../../in-component/Card_earnScreen';
import {Container, Content,Header,Right,Left,Title,Body} from 'native-base';
const EarnScreen = props => {
  return (
    <Container style={styles.container}>
       <Header  hasTabs>
          {/* <Left /> */}
          <Body style={{alignItems:"center"}}>
            <Title style={{color: 'white'}}>Earn</Title>
          </Body>
          {/* <Right /> */}
        </Header>
      <Content>
        <Earncard imageSource="1" likes="250" Tournament="Gold" People="40" />
        <Earncard imageSource="2" likes="200" Tournament="Silver" People="60" />
        <Earncard imageSource="3" likes="20" Tournament="Bronze" People="80" />
      </Content>
    </Container>
  );
};

export default EarnScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
