import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import Header from "../shared/header";
import React from "react";
import { Image } from "react-native";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="GameZone" />,
        headerBackground: () => (
          <Image
            source={require("../assets/game_bg.png")}
            style={{ height: 60 }}
          />
        ),
      };
    },
    // navigationOptions: {
    //   title: "GameZone",
    //     headerStyle: { backgroundColor: "#eee" },
    //   headerTitle: () => <Header />,
    // },
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: "Review Details",
      //   headerStyle: { backgroundColor: "#eee" },
    },
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: { backgroundColor: "#eee", height: 60 },
  },
});

export default HomeStack;
