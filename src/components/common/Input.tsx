import React from "react";
/*import { useFormContext, Controller } from "react-hook-form";*/
import { KeyboardType, Text, TextInput, View } from "react-native";
import { styles } from "../../themes/components/common/Input.themes";
import { darkBlack, lightWhite } from "../../themes/_varibles";
type InputProps = {
  label: string
  keyboardType: KeyboardType
  defaultValue?: string|undefined
  secureTextEntry? : boolean
  placeholder?: string
  rules?: string
}
export default function Input(props: InputProps){
  const { defaultValue, secureTextEntry, label, placeholder, keyboardType } = props
/*/!*  const formContext = useFormContext();*!/
  const {control, formState: {errors}} = formContext*/
  /*const { field } = control({ name, rules, defaultValue });*/
  return(
    <View /*style={styles.container}*/>
      {label && (<Text /*style={styles.label}*/>{label}</Text>)}
      <View /*style={styles.inputContainer}*/>
        <TextInput
          style={styles.input}
          {...props}
        />
      </View>
    </View>
  )
}

/*
<Controller key={label} name={label} control={control}
            render={({field: {onChange,value, onBlur}}) => (
              <TextInput variant="filled" color={"on-surface"}
                         inputStyle={{color:darkBlack,
                           backgroundColor: lightWhite,
                           borderStyle:"solid"}}
                         onBlur={onBlur} label={label} defaultValue={defaultValue}
                         placeholder={placeholder} onChangeText={value => onChange(value)}
                         value={value} style={styles.input}
                         secureTextEntry={secureTextEntry} keyboardType={keyboardType}/>
            )}/>
{errors[label] && <Text>campo requerido</Text>}*/
