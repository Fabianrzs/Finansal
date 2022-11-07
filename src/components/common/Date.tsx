import React, { useState } from 'react'
import DatePicker from 'react-native-date-picker'
import Button from "./Button";
import { KeyboardType } from "react-native";
import Input from "./Input";

type InputDateProps = {
  label: string
  name: string
  onChange: Function
  value: any
  defaultValue?: string|undefined
  placeholder?: string
  placeholderTextColor?: string
  dark?:boolean
}


export default function InputDate(props: InputDateProps){
  
  const { defaultValue, name, label, placeholder,
    placeholderTextColor, onChange, value, dark } = props
  const [open, setOpen] = useState(false)
  
  return(
    <>
      <Input label={label} name={name} onChange={onChange} onPress={() => setOpen(true)}
             value={value.toLocaleDateString()} keyboardType={"default"} editable={false} dark/>
      
      <DatePicker
        modal
        mode="date"
        open={open}
        date={value}
        onConfirm={(date:Date) => {
          onChange(date, name)
          setOpen(false)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
    </>
  )
}
