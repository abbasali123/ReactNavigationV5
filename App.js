import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import Icon from "react-native-vector-icons/Ionicons";
import {
  SignIn,
  CreateAccount,
  Home,
  Profile,
  Search,
  Search2,
  Details,
  Splash,
} from "./App/Screens";

const AuthStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const SearchStack = createStackNavigator();
const drawerNavigate = createDrawerNavigator();
import { AuthContext } from "./App/Context";

import RootStackScreen from "./App/RootStackScreen";

const HomeStackScreen = ({ navigation }) => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home Screen"
        component={Home}
        options={{
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={25}
              backgroundColor="#e91e63"
              onPress={() => navigation.openDrawer()}
            ></Icon.Button>
          ),
        }}
      />
      <HomeStack.Screen
        name="Details"
        component={Details}
        options={({ route }) => ({
          title: route.params.name,
        })}
      />
    </HomeStack.Navigator>
  );
};
const ProfileStackScreen = ({ navigation }) => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile Screen"
        component={Profile}
        options={{
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={25}
              backgroundColor="#e91e63"
              onPress={() => navigation.openDrawer()}
            ></Icon.Button>
          ),
        }}
      />
    </ProfileStack.Navigator>
  );
};

const SearchStackScreen = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="Search Screen" component={Search} />
      <SearchStack.Screen name="Search2" component={Search2} />
    </SearchStack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      style={{ backgroundColor: "tomato" }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: "Home",
          tabBarColor: "#009387",
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileStackScreen"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarColor: "#e91e63",
          tabBarIcon: ({ color }) => (
            <Icon name="ios-contact" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="SearchStackScreen"
        component={SearchStackScreen}
        options={{
          tabBarLabel: "Search",
          tabBarColor: "#e91e63",
          tabBarIcon: ({ color }) => (
            <Icon name="ios-search" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  // const [isLoading, setisLoading] = useState(true);
  // const [useToken, setuseToken] = useState(null);

  // const authContext = React.useMemo(() => {
  //   return {
  //     signIn: () => {
  //       setisLoading(false), setuseToken("asdf");
  //     },
  //     signUp: () => {
  //       setisLoading(false), setuseToken("asdf");
  //     },
  //     signOut: () => {
  //       setisLoading(false), setuseToken(null);
  //     },
  //   };
  // });

  // useEffect(() => {
  //   setTimeout(() => {
  //     setisLoading(false);
  //   }, 1000);
  // }, []);

  // if (isLoading) {
  //   return <Splash />;
  // }
  return (
    // <AuthContext.Provider value={authContext}>
    <NavigationContainer>
      <RootStackScreen />
      {/* {useToken ? (
          <drawerNavigate.Navigator>
            <drawerNavigate.Screen name="Home" component={TabNavigator} />
            <drawerNavigate.Screen
              name="Profile"
              component={ProfileStackScreen}
            />
          </drawerNavigate.Navigator>
        ) : (
          <AuthStack.Navigator>
            <AuthStack.Screen
              name="SignIn"
              component={SignIn}
              options={{ title: "Sign In" }}
            />
            <AuthStack.Screen
              name="CreateAccount"
              component={CreateAccount}
              options={{ title: "Create Account" }}
            />
          </AuthStack.Navigator>
        )}

         */}
    </NavigationContainer>
    // </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
