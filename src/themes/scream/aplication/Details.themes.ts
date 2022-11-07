import { StyleSheet,StatusBar  } from "react-native";
import { darkBlack, lightWhite, primaryBlue } from "../../_varibles";

export const styles = StyleSheet.create({
  areaSafe:{
    flex:1,
  },
  container: {
    paddingHorizontal: 10,
    height: "100%",
    backgroundColor: lightWhite
  },
  containerbuttom:{
    justifyContent: 'flex-end',
    margin: 15,
    alignItems: 'flex-end',
    minHeight: 50,
  },
  buttonStyles:{
    position: 'absolute',
    left: 200,
    top: 220,
    borderColor: primaryBlue,
    backgroundColor: lightWhite,
    borderRadius: 100,
    width: "40%",
    borderWidth: 1,
  },
  textStyles:{
    textAlign:"center",
    fontSize: 20,
    color: darkBlack,
    margin:15
  },
});