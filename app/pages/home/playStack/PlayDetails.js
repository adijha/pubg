import React from 'react';
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
import {PlayTabThree, PlayTabTwo, PlayTabOne} from '../../../components/Tab';
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
          <PlayTabOne />
        </Tab>
        <Tab
          heading={
            <TabHeading style={{backgroundColor: '#22273A'}}>
              <Icon name="logo-game-controller-b" />
              <Text>UPCOMING</Text>
            </TabHeading>
          }>
          <PlayTabTwo />
        </Tab>
        <Tab
          heading={
            <TabHeading style={{backgroundColor: '#22273A'}}>
              <Icon name="apps" />
              <Text>RESULT</Text>
            </TabHeading>
          }>
          <PlayTabThree />
        </Tab>
      </Tabs>
    </Container>
  );
};
export default PlayDetails;
