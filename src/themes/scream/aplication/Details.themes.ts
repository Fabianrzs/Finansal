import { StyleSheet } from "react-native";
import { lightWhite, primaryBlue } from "../../_varibles";

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
    left: 250,
    top: 320,
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
    fontSize: 15,
    left: 20,
    top:10,
    margin:5,
  },
  textdetailsparams: {
    textAlign: 'justify',
    position: 'relative',
    left: 25,
    fontSize: 20,
    top:10,
    margin: 2
  },
});
