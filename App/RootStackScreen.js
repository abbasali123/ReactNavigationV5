import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SplashScreen from "./splashScreen";
import SignInScreen from "./SignInScreen";
import SignUpScreen from "./SignUpScreen";

import { createStackNavigator } from "@react-navigation/stack";
import splashScreen from "./splashScreen";

const RootStack = createStackNavigator();

const RootScreen = ({ navigation }) => (
  <RootStack.Navigator>
    <RootStack.Screen name="Splash" component={SplashScreen} />
    <RootStack.Screen name="SignIn" component={SignInScreen} />
    <RootStack.Screen name="SignUp" component={SignUpScreen} />
  </RootStack.Navigator>
);
export default RootScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
