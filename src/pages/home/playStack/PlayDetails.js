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
const PlayDetails = () => {
  return (
    <Container>
      <Header hasTabs>
        {/* <Left /> */}
        <Body style={{alignItems: 'center'}}>
          <Title style={{color: 'white'}}>Play</Title>
        </Body>
        {/* <Right /> */}
      </Header>
      <Tabs>
        <Tab
          heading={
            <TabHeading>
              <Icon name="ios-clock" />
              <Text>ONGOING</Text>
            </TabHeading>
          }>
          <Tab1 />
        </Tab>
        <Tab
          heading={
            <TabHeading>
              <Icon name="logo-game-controller-b" />
              <Text>UPCOMING</Text>
            </TabHeading>
          }>
          <Tab2 />
        </Tab>
        <Tab
          heading={
            <TabHeading>
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
