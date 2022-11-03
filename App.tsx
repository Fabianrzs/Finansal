import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./src/routes/StackNavigator";
import { AuthProvider } from "./src/context/AuthContext";

const AppState = ({children}: {children: JSX.Element | JSX.Element[]}) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

const App = ({navigation, route}:any) => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <AppState>
          <StackNavigator navigation={navigation} route={route}/>
        </AppState>
      </NavigationContainer>
    </GestureHandlerRootView>
  )
};

export default App;
