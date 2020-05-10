import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Card from '../../in-component/card_playtab';
import {Container, Content} from 'native-base';
const tabTwo = () => {
  return (
    <Container style={styles.container}>
      <Content>
        <Card />
        <Card />
        <Card />
      </Content>
    </Container>
  );
};

export default tabTwo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    backgroundColor: '#ebf0f7',
  },
  contentList: {
    flex: 1,
  },
});
