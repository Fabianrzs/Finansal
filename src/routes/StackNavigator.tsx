import React, { useContext } from "react";
import LoginScreen from "../screens/user/loginScreen";
import { createStackNavigator } from "@react-navigation/stack";
import RegisterScreen from "../screens/user/registerScreen";
import TabNavigator from "./TabNavigator";
import { AuthContext } from "../context/AuthContext";
import Loader from "../components/common/Loader";

const Stack = createStackNavigator();

export default function StackNavigator(){
  
  const {status} = useContext(AuthContext);
  
  if (status === 'checking') {
    return <Loader/>
  }
  
  return(
      <Stack.Navigator
        screenOptions={{
          headerShown: false,}}>
        {(status === 'auth')?
          <Stack.Screen name="Loged" component={TabNavigator} />
          :<>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </>
          }
      </Stack.Navigator>
  )
}
