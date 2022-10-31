import React, { useContext, useEffect, useReducer } from "react";
import HomeScreen from "../screens/home/homeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Informe from "../screens/aplication/informe";
import Registro from "../screens/aplication/registro";
import { Text } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { darkBlack, lightWhite } from "../themes/_varibles";
import { AuthContext } from "../context/AuthContext";
import Button from "../components/common/Button";

const Tab = createBottomTabNavigator();

interface Props extends  StackScreenProps<any, any>{};

export default function TabNavigator({navigation}:Props){
  
  const {logOut} =  useContext(AuthContext)
  
  useEffect(()=>{
    navigation.setOptions({
      headerShown: true,
      headerRight: () => (
        <Button stylesText={{color: darkBlack}} title={"Salir"} onPress={logOut}/>
      ),
      title: '',
    })
  },[])
  
  return(
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Informe" component={Informe} />
      <Tab.Screen name="Registros" component={Registro} />
    </Tab.Navigator>
  )
}
