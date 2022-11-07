import { StyleSheet,StatusBar  } from "react-native";
import { lightWhite, primaryBlue } from "../../_varibles";

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
    justifyContent: 'space-evenly',
    margin: 15,
    flexDirection: 'row',
    alignContent: 'space-between',
    minHeight: 50,
  },
  buttonStyles:{
    backgroundColor: primaryBlue,
    borderRadius: 15,
    width: "40%"
  },
  textStyles:{
    textAlign:"center",
    fontSize: 20,
    color: lightWhite,
    margin:15
  },
});
