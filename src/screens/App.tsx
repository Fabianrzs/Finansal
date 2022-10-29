import React from "react";
import StackNavigator from "../routes/StackNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <StackNavigator/>
      </NavigationContainer>
  </GestureHandlerRootView>
  )
};

export default App;
