import React from "react"
import { Text, View } from "react-native";
import { styles } from "../themes/components/CardUtility.themes";

interface CardUtility {
  title:string,
  subTitle:string,
  value: number,
  low?: boolean,
  icon?: string
}

export default function CardUtility(props: CardUtility){
  
  const {icon, subTitle, title, low, value} = props
  
  return(
    <View style={styles.container}>
      <View style={styles.circleIcon}></View>
      <View style={styles.containerText}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
        <Text style={[styles.value,low?  styles.valueRed: styles.valuegren]}>{low? "-":"+"}${value}</Text>
      </View>
    </View>
  )
}
