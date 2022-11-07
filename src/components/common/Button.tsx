import React, { useEffect } from "react";
import { ActivityIndicator, Text, TouchableOpacity } from "react-native";
import useButtonStyle from "../../hooks/components/common/useButtonStyle";
import { lightWhite, primaryBlue } from "../../themes/_varibles";

interface ButtonProps{
  title: string | JSX.Element,
  onPress: ()=> void,
  typeButton?: 'outlet' | 'btn' | 'FAB' | undefined,
  colorText?:'primary' | 'danger' | 'light' | 'dark' | 'susses' | undefined,
  stylesButton?: any,
  stylesText?:any,
  size?: number,
  disabled?: boolean,
  onLongPress?:  () => void,
  activeOpacity?: number,
  loader?: boolean,
}

export default function Button(props:ButtonProps){
  const {title, onPress, stylesButton, disabled,activeOpacity,
    typeButton, colorText ,stylesText, onLongPress, loader, size} = props
  const { text, button } = useButtonStyle(typeButton, colorText)
  
  return (
    <TouchableOpacity style={[stylesButton? stylesButton:button ]}
               disabled={disabled} activeOpacity={activeOpacity? activeOpacity : 0.9}
               onLongPress={onLongPress}
               onPress={onPress}>
  
      {(loader)? <ActivityIndicator size="small" color={lightWhite} /> : <Text style={stylesText ? stylesText : text}>{title}</Text>}
    </TouchableOpacity>
  )
}
