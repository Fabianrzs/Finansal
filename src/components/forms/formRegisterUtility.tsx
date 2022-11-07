import React from "react"
import Input from "../common/Input";
import { useForm } from "../../hooks/useForm";
import { Utility, UtilityValues } from "../../models/Utility";
import { View } from "react-native";
import Button from "../common/Button";
import { styles } from "../../themes/components/forms/FormRegisterUtility.themes";
import Background from "../background";


type registerUtilityProps = {onPress: Function}

export default function FormRegisterUtility({onPress}: registerUtilityProps){
  
  const {form, value, name, subCategory, comentario, date, onChange} = useForm<Utility>(UtilityValues)
  
  return(
    <View style={styles.container}>
      <Input label={"Nombre de la utilidad"} name={"name"} onChange={onChange} value={name} keyboardType={"default"} dark/>
      <Input label={"Categoria"} name={"subCategory"} onChange={onChange} value={subCategory} keyboardType={"default"} dark/>
      <Input label={"Fecha"} name={"date"} onChange={onChange} value={date} keyboardType={"default"} dark/>
      <Input label={"Comentario"} name={"comentario"} onChange={onChange} value={comentario} keyboardType={"default"} dark/>
      <Input label={"Valor"} name={"value"} onChange={onChange} value={value} keyboardType={"numeric"} dark/>
      <Button title={"Guardar"} onPress={()=>onPress(form)} typeButton={"btn"} colorText={"primary"}/>
    </View>
  )
}
