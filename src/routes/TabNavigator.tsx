import React, { useContext, useEffect, useReducer, useState } from "react";
import HomeScreen from "../screens/home/homeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Informe from "../screens/aplication/informe";
import Registro from "../screens/aplication/registro";
import { Text } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { darkBlack, lightGray, lightWhite, primaryBlue, secondaryWhite } from "../themes/_varibles";
import { AuthContext } from "../context/AuthContext";
import Button from "../components/common/Button";
import FadeWelcome from "../components/fadeWelcome";
import Loader from "../components/common/Loader";

const Tab = createBottomTabNavigator();

interface Props extends  StackScreenProps<any, any>{};

export default function TabNavigator({navigation}:Props){
  
  const [initial, setInitial] = useState<boolean>(true);
  const {logOut} =  useContext(AuthContext)
  
  useEffect(()=>{
    setTimeout(()=>{
      updateView()
    },5000)
  },[])
  
  const updateView = () => {
    navigation.setOptions({
      headerShown: true,
      headerRight: () => (
        <Button stylesText={{color: darkBlack}} title={"Salir"} onPress={logOut}/>
      ),
      title: 'Finansal',
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
    tabBarOptions={{
      activeTintColor: primaryBlue,
      activeBackgroundColor: lightGray,
      labelStyle: {
        fontSize: 15,
        fontWeight: "bold"
      },
      inactiveTintColor: primaryBlue,
      inactiveBackgroundColor: lightWhite
    }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Informe" component={Informe} />
      <Tab.Screen name="Registros" component={Registro} />
    </Tab.Navigator>
  )
}
