import React, { useRef, useEffect } from 'react';
import { Animated, Text, View } from 'react-native';

const FadeWelcome = () => {
  
  const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0
  
  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        useNativeDriver:true,
        delay:10,
        toValue: 1,
        duration: 2500,
      },
    ).start();
  }, [fadeAnim])
  
  return (

  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Animated.View  style={{opacity: fadeAnim}}>
      <Text style={{fontSize: 40, textAlign: 'center', fontWeight: "bold"}}>Bienvenido</Text>
    </Animated.View>
  </View>
  );
}
export default FadeWelcome;
