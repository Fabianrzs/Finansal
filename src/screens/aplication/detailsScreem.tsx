import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { primaryBlue, secondaryWhite } from "../../themes/_varibles";

export default function DetailsScreem({route:{params}, navigation }:any){
  useEffect(()=>{
    navigation.setOptions({
      headerShown: true,
      title: "Detalle de utilidades",
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
    <View style={{justifyContent:"center", alignSelf:"center", flex:1}}>
      <Text>{ JSON.stringify(params, null, 2) } </Text>
    </View>
  )
}
