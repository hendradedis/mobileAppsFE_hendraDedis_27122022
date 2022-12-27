import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import IntroScreen from '../introscreen';
import HomeScreen from '../screen/Home';
// import WelcomeScreen from '../screen/welcome';
import LoginScreen from '../screen/Login';
import SignUpScreen from '../screen/SignUp';

export type RootStackParamList = {
  home: undefined;
  Intro: undefined;
  route?: any;
  // welcome: undefined;
  login?: undefined;
  signUp?: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Intro">
      <Stack.Screen
        name="Intro"
        component={IntroScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="signUp"
        component={SignUpScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
