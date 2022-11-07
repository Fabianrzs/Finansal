import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { primaryBlue, secondaryWhite } from "../../themes/_varibles";

export default function UtilitiesScreem({route:{params}, navigation }:any){
  
  const [utilityType, setUtilityType] = useState<boolean>(params)
  const [utilityText, setUtilityText] = useState<string>((!!params)? "Ingreso": "Gastos")
  
  useEffect(()=>{
    navigation.setOptions({
      headerShown: true,
      title: "Registro de "+utilityText,
      headerTitleStyle:{
        color: primaryBlue,
        fontWeight: "600",
      },
      headerStyle:{
        shadowColor: secondaryWhite
      }
    })
  },[])
  
  return(
    <View>
      <Text style={{textAlign:"center", }}>Hola utilidades</Text>
    </View>
  )
}
