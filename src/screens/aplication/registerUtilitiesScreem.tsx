import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { primaryBlue, secondaryWhite } from "../../themes/_varibles";
import FormRegisterUtility from "../../components/forms/formRegisterUtility";
import { Utility } from "../../models/Utility";
import Dates from "../../components/common/Date";
import InputDate from "../../components/common/Date";

export default function RegisterUtilitiesScreem({route:{params}, navigation }:any){
  
  const [utilityType, setUtilityType] = useState<boolean>(params)
  const [utilityText, setUtilityText] = useState<string>((!!params)? "Ingresos": "Gastos")
  
  useEffect(()=>{
    navigation.setOptions({
      headerShown: true,
      title: utilityText,
      headerTitleStyle:{
        color: primaryBlue,
        fontWeight: "600",
      },
      headerStyle:{
        shadowColor: secondaryWhite
      }
    })
  },[])
  
  const onPress = (data: Utility) =>{
    console.log("Data", data);
  }
  const UtilityValues: Utility = {
    name: "Ninguno ",
    subCategory: "Juaz Juaz ",
    value: 12345,
    date: new Date(),
    comentario: "Ninguno"
  }
  return(
    <View style={{flex: 1, justifyContent: "center"}}>
      <Text style={{textAlign:"center", fontSize: 20, fontWeight: "bold", marginVertical: 5, }}>{"Registro de "+ utilityText}</Text>
      <FormRegisterUtility onPress={onPress}  />
    </View>
  )
}
