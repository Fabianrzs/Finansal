import { StyleSheet } from "react-native";
import { dangerRed, darkBlack, graywhite, lightWhite, primaryBlue, sucessGren } from "../../_varibles";

export const styles = StyleSheet.create({
  areaSafe:{
    flex:1,
  },
  container: {
    justifyContent:"flex-start", 
    alignSelf:"flex-start", 
    flex:1,
    backgroundColor: lightWhite,
  },
  containerbuttom:{
    justifyContent: 'flex-end',
    margin: 15,
    alignItems: 'flex-end',
    minHeight: 50,
  },
  buttonStyles:{
    position: 'relative',
    left: 200,
    top: 280,
    borderColor: primaryBlue,
    backgroundColor: lightWhite,
    borderRadius: 100,
    borderWidth: 2,
  },
  textStyles:{
    textAlign:"center",
    fontSize: 30,
    padding:10
  },
  textdetailstitle: {
    textAlign: 'justify',
    fontSize: 16,
    left: 20,
    top:10,
    margin:8,
    color: graywhite
  },
  textdetailsparams: {
    textAlign: 'justify',
    position: 'relative',
    left: 50,
    fontSize: 20,
    top:10,
    margin: 5,
    color: darkBlack
  },
  textdetailstitlered: {
    textAlign: 'justify',
    fontSize: 24,
    left: 20,
    top:10,
    margin:8,
    color: dangerRed
  },
  textdetailstitlegreen: {
    textAlign: 'justify',
    fontSize: 24,
    left: 20,
    top:10,
    margin:8,
    color: sucessGren,
  },
});
