import React from "react";
import { Text, View } from "react-native";
import Icoon from "../../components/common/Icon";
import { styles } from "../../themes/scream/home/Home.themes";
export default function HomeScreen(){
  
  return(
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.textValue}> Hola </Text>
        <Text style={styles.textSaldo}> Saldo a Favor </Text>
        <Text style={styles.textUser}> Usuario </Text>
      </View>
    </View>
  )
}
