import { Text, View } from "react-native";
import React, { Component } from "react";

import StackNavigation from "./src/screens/StackNavigation";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
export class App extends Component {
  render() {
    return (
      <>
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
      </>
    );
  }
}
export default App;

