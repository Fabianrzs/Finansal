import React from "react";
import {Image, View} from "react-native";

export default function Logo(){
  return(
    <View style={{
      alignItems: 'center'
    }}>
      <Image
        source={require('../assets/logo.png')}
        style={{
          width: 110,
          height:110
        }}
      />
    </View>
  );
}
