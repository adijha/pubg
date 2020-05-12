import React from 'react';
import {StyleSheet, View} from 'react-native';
import Card from '../../in-component/card_playtab';
import {Container, Content} from 'native-base';

const TabOne = () => {
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

export default TabOne;

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
