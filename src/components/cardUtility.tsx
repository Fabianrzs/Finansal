import React from "react"
import { Text, View } from "react-native";
import { styles } from "../themes/components/CardUtility.themes";

interface CardUtility {
  name:string,
  subCategory:string,
  value: number,
  low?: boolean,
  icon?: string
}

export default function CardUtility(props: CardUtility){
  
  const {icon, subCategory, name, low, value} = props
  
  return(
    <View style={styles.container}>
      <View style={styles.circleIcon}></View>
      <View style={styles.containerText}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>{subCategory}</Text>
        <Text style={[styles.value,low?  styles.valueRed: styles.valuegren]}>{low? "-":"+"}${value}</Text>
      </View>
    </View>
  )
}
