import { StyleSheet } from "react-native";
import { lightWhite, primaryBlue } from "../../_varibles";

export const styles = StyleSheet.create({
  container : {
    paddingHorizontal: 40,
    justifyContent: "center",
    height: "100%",
  },
  title:{
    color: lightWhite,
    fontWeight: "bold",
    fontSize: 25,
    paddingBottom: 20,
  },
  buttonRegister:{
    alignItems: "flex-end",
    marginTop: 25,
  },
  buttonLogear:{
    alignItems: "flex-start",
    marginLeft:-20,
    marginBottom: 15
  },
  textButton:{
    fontSize: 15,
    fontWeight: "bold",
    color: lightWhite
  }
});
