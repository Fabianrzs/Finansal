import React from "react";
import { View } from "react-native";
import Button from "../../components/common/Button";
import { styles } from "../../themes/scream/aplication/Register.themes"

export default function RegisterUtilitiesScreen({ navigation }:any){
  return(
    <View style={styles.container}>
      <Button stylesButton={styles.buttonStyles} stylesText={styles.textStyles}
              title={"Ingresos"} onPress={()=> navigation.navigate('Utilities', true)}/>
      <Button stylesButton={styles.buttonStyles} stylesText={styles.textStyles}
              title={"Gastos"} onPress={()=> navigation.navigate('Utilities', false)}/>
    </View>
  )
}
