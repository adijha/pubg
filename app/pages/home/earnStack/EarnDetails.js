import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {EarnCard} from '../../../components/Card';
import {Container, Content, Header, Title, Body} from 'native-base';
const EarnDetails = (props) => {
  return (
    <Container style={styles.container}>
      <Header hasTabs style={{backgroundColor: '#22273A'}}>
        <Body style={{alignItems: 'center'}}>
          <Title style={{color: 'white'}}>
            {props.route.params.tournament} Tournament
          </Title>
        </Body>
      </Header>
      <Content>
        <EarnCard
          imageSource={props.route.params.imageSource}
          likes="250"
          Tournament="Gold"
          People="40"
        />
      </Content>
    </Container>
  );
};

export default EarnDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
