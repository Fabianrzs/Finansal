import React from "react";
import { Text, View } from "react-native";
import { color } from "react-native-reanimated";
import Card from "../../components/card";
import { styles } from "../../themes/scream/home/Home.themes";
export default function HomeScreen(){
  
  return(
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.textValue}> 25.000.812 </Text>
        <Text style={styles.textSaldo}> Saldo a Favor </Text>
        <Text style={styles.textUser}>Danneb</Text>
      </View>
      <View>
        <View style={styles.containercard}>
          <Card value={7500} percentage={20.4}/>
          <Card low value={200000} percentage={79.6}/>
        </View>
      </View>
    </View>
  )
}
