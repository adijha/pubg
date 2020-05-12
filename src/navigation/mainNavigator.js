import React from 'react';
import {Text} from 'react-native';
//navigation imports
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//pages
import PlayScreen from '../pages/home/playStack/PlayScreen';
import ProfileScreen from '../pages/home/profileStack/ProfileScreen';
import EarnScreen from '../pages/home/earnStack/EarnScreen';
//auth
import LoadingScreen from '../pages/auth/LoadingScreen';
import SignInScreen from '../pages/auth/SignInScreen';
import SignUpScreen from '../pages/auth/SignUpScreen';

//bottom tab bar icons
import IoniconsI from 'react-native-vector-icons/Ionicons';
import FontAwesomeI from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIconsI from 'react-native-vector-icons/MaterialCommunityIcons';

// initialize navigator
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const EarnStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const PlayStack = createStackNavigator();

function getHeaderTitle(route) {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : 'Sport';
  switch (routeName) {
    case 'Earn':
      return 'Earn';
    case 'Play':
      return 'Play';
    case 'Profile':
      return 'Profile';
  }
}

export const AuthNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Loading" component={LoadingScreen} />
    <Stack.Screen name="SignIn" component={SignInScreen} />
    <Stack.Screen name="SignUp" component={SignUpScreen} />
  </Stack.Navigator>
);
export const PlayStackNavigator = () => {
  return (
    <PlayStack.Navigator>
      <PlayStack.Screen
        options={{headerShown: false}}
        name="Play"
        component={PlayScreen}
      />
    </PlayStack.Navigator>
  );
};

export const EarnStackNavigator = () => (
  <EarnStack.Navigator>
    <EarnStack.Screen
      options={{headerShown:false}}
      name="Earn"
      component={EarnScreen}
    />
  </EarnStack.Navigator>
);

export const ProfileStackNavigator = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen
      // options={{headerShown:false}}
      name="Profile"
      component={ProfileScreen}
    />
  </ProfileStack.Navigator>
);

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          if (route.name === 'Earn') {
            return (
              <MaterialCommunityIconsI
                name="currency-inr"
                size={size}
                color={color}
              />
            );
          } else if (route.name === 'Profile') {
            return <FontAwesomeI name="user" size={size} color={color} />;
          } else if (route.name === 'Play') {
            return (
              <IoniconsI
                name="logo-game-controller-b"
                size={size}
                color={color}
              />
            );
          }
        },
      })}
      tabBarOptions={{activeTintColor: 'blue'}}>
      <Tab.Screen name="Earn" component={EarnStackNavigator} />
      <Tab.Screen name="Play" component={PlayStackNavigator} />
      <Tab.Screen name="Profile" component={ProfileStackNavigator} />
    </Tab.Navigator>
  );
};

const MainContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={() => ({
            headerShown: false,
          })}
          name="Auth"
          component={AuthNavigator}
        />
        <Stack.Screen
          options={({route}) => ({
            title: getHeaderTitle(route),
            headerShown: false,
          })}
          name="Earn"
          component={MainTabNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainContainer;
