import React, { useContext, useEffect, useReducer, useState } from "react";
import HomeScreen from "../screens/home/homeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Alert, Text } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { darkBlack, lightGray, lightWhite, primaryBlue, secondaryWhite } from "../themes/_varibles";
import { AuthContext } from "../context/AuthContext";
import Button from "../components/common/Button";
import FadeWelcome from "../components/fadeWelcome";
import Loader from "../components/common/Loader";
import { iconByName } from "../utils/utilities";
import Icon from "../components/common/Icon";
import InformeScreen from "../screens/aplication/informeScreen";
import RegisterUtilitiesScreen from "../screens/aplication/registerUtilitiesScreen";

const Tab = createBottomTabNavigator();

interface Props extends  StackScreenProps<any, any>{};

export default function TabNavigator({navigation, route}:Props){
  
  const [initial, setInitial] = useState<boolean>(true);
  const {logOut} =  useContext(AuthContext)
  
  useEffect(()=>{
    setTimeout(()=>{
      updateView()
    },5000)
  },[])
  
  const createTwoButtonAlert = () =>
    Alert.alert(
      "Cerrar Session",
      "Quieres Salir de tu cuenta?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        { text: "OK", onPress: logOut }
      ]
    );
  
  const updateView = () => {
    navigation.setOptions({
      headerShown: true,
      headerRight: () => (
        <Button stylesText={{color: primaryBlue, fontWeight: "bold", }}
                title={<Icon name={"login"} color={primaryBlue}/>}
                onPress={createTwoButtonAlert}/>
      ),
      title: 'Finansal',
      headerTitleStyle:{
        color: primaryBlue,
        fontWeight: "600",
      },
      headerStyle:{
        shadowColor: secondaryWhite
      }
    })
    setInitial(false)
  }
  
  if(initial){
    return <FadeWelcome/>
  }
  
  return(
    <Tab.Navigator
    lazy
    screenOptions={({route}) => ({
      tabBarIcon: ({color, focused, size}) => {
        const icon = iconByName(route.name);
        return <Icon name={icon} size={23} color={primaryBlue}/>;
      }
    })}
    tabBarOptions={{
      activeTintColor: primaryBlue,
      activeBackgroundColor: lightGray,
      labelStyle: {display:"none"},
      inactiveTintColor: primaryBlue,
      inactiveBackgroundColor: lightWhite
    }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Informe" component={InformeScreen} />
      <Tab.Screen name="Registros" component={RegisterUtilitiesScreen} />
    </Tab.Navigator>
  )
}
