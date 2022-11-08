import { StyleSheet } from "react-native";
import { dangerRed, darkBlack, graywhite, lightWhite, primaryBlue, sucessGren } from "../../_varibles";

export const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  containerbuttom:{
    flex:1,
    position:"relative",
    margin: 15,
    justifyContent: "flex-end",
    alignItems: 'flex-end',
    alignSelf:"flex-end",
  },
  buttonStyles:{
    borderColor: primaryBlue,
    backgroundColor: lightWhite,
    borderRadius: 100,
    borderWidth: 2,
  },
  textStyles:{
    padding:10
  },
  textdetailstitle: {
    fontSize: 16,
    left: 20,
    top:10,
    margin:8,
    color: graywhite
  },
  textdetailsparams: {
    left: 50,
    fontSize: 20,
    top:10,
    margin: 5,
    color: darkBlack
  },
  textdetail:{
    fontSize: 24,
    left: 20,
    top:10,
    margin:8,
  },
  textdetailstitlered: {
    color: dangerRed
  },
  textdetailstitlegreen: {
    color: sucessGren,
  },
});
