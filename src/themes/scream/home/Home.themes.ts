import { StyleSheet } from "react-native";
import { graywhite, lightWhite, primaryBlue } from "../../_varibles";

export const styles = StyleSheet.create({
  container : {
    paddingHorizontal: 30,
    height: "100%",
    backgroundColor: lightWhite
  },
  card:{
    height: "35%",
    backgroundColor: primaryBlue,
    borderRadius: 15,
  },
  textValue:{
    flex:1,
    position: "relative",
    fontWeight: "bold",
    fontSize: 30,
    color: lightWhite,
    alignSelf: "flex-end",
    margin:20
  },
  textSaldo:{
    position: "relative",
    fontWeight: "bold",
    fontSize: 20,
    color: lightWhite,
    alignSelf: "center",
    justifyContent: "center"
  },
  textUser:{
    position: "relative",
    fontWeight: "bold",
    fontSize: 20,
    color: lightWhite,
    alignSelf: "flex-start",
    margin:20
  },
  containercard:{
    backgroundColor: graywhite,
    justifyContent: 'space-around',
    marginTop: 15,
    flexDirection: 'row',
    alignContent: 'space-between',
    minHeight: 80,
  },
});
