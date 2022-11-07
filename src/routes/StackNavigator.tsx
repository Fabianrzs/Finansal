import React, { useContext } from "react";
import LoginScreen from "../screens/user/loginScreen";
import { createStackNavigator, StackScreenProps } from "@react-navigation/stack";
import RegisterScreen from "../screens/user/registerScreen";
import TabNavigator from "./TabNavigator";
import { AuthContext } from "../context/AuthContext";
import Loader from "../components/common/Loader";
import { lightWhite } from "../themes/_varibles";
import DetailsScreem from "../screens/aplication/detailsScreem";
import RegisterUtilitiesScreem from "../screens/aplication/registerUtilitiesScreem";


const Stack = createStackNavigator();

interface Props extends  StackScreenProps<any, any>{};

export default function StackNavigator({navigation, route}: Props){
  
  const {status} = useContext(AuthContext);
  
  if (status === 'checking') {
    return <Loader/>
  }
  
  return(
      <Stack.Navigator
        screenOptions={{
          headerStyle:{
            elevation: 0,
            shadowColor: 'transparent'
          },
          cardStyle: {
            backgroundColor: lightWhite
          },
          headerShown: false
          }}>
        {(status === 'auth')?
          <>
            <Stack.Screen name="Loged" component={TabNavigator} />
            <Stack.Screen name="Utilities" component={RegisterUtilitiesScreem} />
            <Stack.Screen name="Details" component={DetailsScreem} />
          </>
          :<>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </>
          }
      </Stack.Navigator>
  )
}
