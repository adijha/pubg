import React, {Component, StyleSheet} from 'react';
import {
  Container,
  Header,
  Tab,
  Tabs,
  TabHeading,
  Icon,
  Text,
  Body,
  Title,
} from 'native-base';
import Tab1 from './tabOne';
import Tab2 from './tabTwo';
import Tab3 from './tabThree';
const PlayDetails = ({navigation, route}) => {
  return (
    <Container>
      <Header hasTabs style={{backgroundColor: '#22273A'}}>
        <Body style={{alignItems: 'center'}}>
          <Title style={{color: 'white'}}>{route.params.game}</Title>
        </Body>
      </Header>
      <Tabs>
        <Tab
          heading={
            <TabHeading style={{backgroundColor: '#22273A'}}>
              <Icon name="ios-clock" />
              <Text>ONGOING</Text>
            </TabHeading>
          }>
          <Tab1 />
        </Tab>
        <Tab
          heading={
            <TabHeading style={{backgroundColor: '#22273A'}}>
              <Icon name="logo-game-controller-b" />
              <Text>UPCOMING</Text>
            </TabHeading>
          }>
          <Tab2 />
        </Tab>
        <Tab
          heading={
            <TabHeading style={{backgroundColor: '#22273A'}}>
              <Icon name="apps" />
              <Text>RESULT</Text>
            </TabHeading>
          }>
          <Tab3 />
        </Tab>
      </Tabs>
    </Container>
  );
};
export default PlayDetails;
