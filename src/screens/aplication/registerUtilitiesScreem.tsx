import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { primaryBlue, secondaryWhite } from "../../themes/_varibles";
import FormRegisterUtility from "../../components/forms/formRegisterUtility";
import { Utility } from "../../models/Utility";
import Dates from "../../components/common/Date";
import InputDate from "../../components/common/Date";
import UtilityBD from "../../services/firebaseUtilityDB"

export default function RegisterUtilitiesScreem({route:{params}, navigation }:any){
  
  const [utilityType, setUtilityType] = useState<boolean>(params)
  const [utilityText, setUtilityText] = useState<string>((!!params)? "Ingresos": "Gastos")
  
  const {saveUtility, getUtility} = UtilityBD
  
  useEffect(()=>{
    console.log(getUtility().then());
  },[])
  
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
  
  const onPress = async (data: Utility) =>{
    console.log("hola si",UtilityValues);
    const response = await saveUtility(UtilityValues)
    console.log("Finalice");
  }
  const UtilityValues: Utility = {
    name: "Nuevo jeje  ",
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
