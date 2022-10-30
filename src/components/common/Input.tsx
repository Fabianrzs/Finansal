import React from "react";
import { KeyboardType, Text, TextInput, View } from "react-native";
import { stylesDark, stylesLigth } from "../../themes/components/common/Input.themes";
import { darkBlack, lightWhite, secondaryWhite } from "../../themes/_varibles";
import { FormContext } from "./Form";

type InputProps = {
  label: string
  name: string
  onChange: Function
  value: any
  keyboardType: KeyboardType
  defaultValue?: string|undefined
  secureTextEntry? : boolean
  placeholder?: string
  rules?: any
  placeholderTextColor?: string
  dark?:boolean
}

export default function Input(props: InputProps){
  
  const { defaultValue, secureTextEntry, name, label,
    rules, placeholder, keyboardType, placeholderTextColor, onChange, value, dark } = props
  
  const styles = dark? stylesDark : stylesLigth;
  
  return(
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        onChangeText={value => onChange(value, name)} value={value}
        defaultValue={defaultValue} style={styles.inputField}
        placeholder={placeholder} placeholderTextColor={placeholderTextColor}
        keyboardType = {keyboardType} underlineColorAndroid={dark? secondaryWhite :lightWhite}
        secureTextEntry={secureTextEntry} selectionColor={lightWhite}
        />
    </View>
  )
}
