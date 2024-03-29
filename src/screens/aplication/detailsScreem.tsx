import React, { useEffect } from "react";
import { Text, View } from "react-native";
import Button from "../../components/common/Button";
import { styles } from "../../themes/scream/aplication/Details.themes";
import { dangerRed, lightWhite, primaryBlue, secondaryWhite, sucessGren } from "../../themes/_varibles";
import Icon from "../../components/common/Icon";

export default function DetailsScreem({route:{params}, navigation }:any){
  useEffect(()=>{
    navigation.setOptions({
      headerShown: true,
      title: "Detalle de utilidades",
      headerTitleStyle:{
        color: primaryBlue,
        fontWeight: "600",
      },
      headerStyle:{
        shadowColor: secondaryWhite
      }
    })
  },[])
  
  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
        <Text style={[ styles.textdetail,
          (!!params.stateColor)?
            styles.textdetailstitlered
            : styles.textdetailstitlegreen
        ]}><Icon name={(!params.stateColor)?"flecha-hacia-arriba": "flecha-hacia-abajo"} color={(!params.stateColor)? sucessGren:dangerRed}/>Estado {((!params.stateColor)?
          "INGRESOS": "GASTOS")}</Text>
      <Text style={styles.textdetailstitle}>Nombre: </Text>
      <Text style={styles.textdetailsparams}>{params.data.name}</Text>
      <Text style={styles.textdetailstitle}>SubCategoria:</Text>
      <Text style={styles.textdetailsparams}>{params.data.subCategory}</Text>
      <Text style={styles.textdetailstitle}>Valor:</Text>
      <Text style={styles.textdetailsparams}>{params.data.value}</Text>
      <Text style={styles.textdetailstitle}>Fecha:</Text>
      <Text style={styles.textdetailsparams}>{params.data.date.toLocaleDateString()}</Text>
      <Text style={styles.textdetailstitle}>Comentario:</Text>
      <Text style={styles.textdetailsparams}>{params.data.comentario}</Text>
      </View>

      <View style={styles.containerbuttom}>
        <Button stylesButton={styles.buttonStyles} stylesText={styles.textStyles}
                title={<Icon name={"create"} color={primaryBlue} size={25} />}
                onPress={()=>{}}/>
      </View>
    </View>
  )
}
