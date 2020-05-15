import React from 'react';
import {StyleSheet, View} from 'react-native';
import {PlayCard} from '../../components/Card';
import {Container, Content} from 'native-base';

const PlayTabOne = () => {
  return (
    <Container style={styles.container}>
      <Content>
        <PlayCard />
        <PlayCard />
        <PlayCard />
      </Content>
    </Container>
  );
};

export default PlayTabOne;

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
