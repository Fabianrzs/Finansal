import { StyleSheet } from "react-native";
import { green } from "react-native-reanimated/lib/types";
import { dangerRed, darkBlack, graywhite, lightWhite, secondaryWhite } from "../_varibles";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: lightWhite,
    borderRadius: 16,
    borderColor: darkBlack,
    height: 75,
    width: '45%',
  },
  text: {
    position:'absolute',
    top: 5,
    left: 35,
  },
  textvalue: {
    position:'absolute',
    top: 5,
    right: 10,
  },
  textpercentage: {
    position:'absolute',
    bottom: 5,
    left: 35,
  },
  ramdom:{
    width:'20%',
    backgroundColor: 'green',
    height: '100%',
    alignItems: 'flex-start',
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
    borderLeftColor: 10,
  },
});