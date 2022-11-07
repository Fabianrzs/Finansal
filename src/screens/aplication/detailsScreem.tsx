import React, { useEffect } from "react";
import { Text, View } from "react-native";
import Button from "../../components/common/Button";
import { styles } from "../../themes/scream/aplication/Details.themes";
import { primaryBlue, secondaryWhite } from "../../themes/_varibles";
import Icon from "../../components/common/Icon";

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
      <View style={styles.containerbuttom}>
        <Button stylesButton={styles.buttonStyles} stylesText={styles.textStyles}
                title={<Icon name={"create"} color={primaryBlue} size={25} />} onPress={()=>{}}/>
      </View>
    </View>
  )
}
