import React from "react";
import { Text, View } from "react-native";
import { color } from "react-native-reanimated";
import Card from "../../components/card";
import { styles } from "../../themes/scream/home/Home.themes";
export default function HomeScreen(){
  
  return(
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.textValue}> Hola </Text>
        <Text style={styles.textSaldo}> Saldo a Favor </Text>
        <Text style={styles.textUser}> Usuario </Text>
      </View>
      <View>
        <View style={styles.containercard}>
          <Card value={2000} percentage={20.4}/>
          <Card value={200} percentage={1.4}/>
        </View>
      </View>
    </View>
  )
}
