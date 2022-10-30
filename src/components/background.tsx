import React from "react";
import { View } from "react-native";
import { lightWhite, primaryBlue } from "../themes/_varibles";

export default function Background({ rotate, white }:any){
  return(
    <View style={{
      position: 'absolute',
      backgroundColor: primaryBlue,
      top: -250,
      width: (white)? 300 :700,
      height:  (white)? 500 :1200,
      transform: [
        {rotate: rotate}
      ]
    }}>
    </View>
  )
}
