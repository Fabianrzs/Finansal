
import { UserLogin, UserRegister } from "../models/User";
import { auth } from "../utils/Firebase";
import firebase from "firebase";

export default{
  async login({ email,password }:UserLogin){
    try {
      const response = await auth.signInWithEmailAndPassword(email, password);
      return response;
    }catch (error){
      console.log(error);
      throw { error }
    }
  },
  async register({ email,password }:UserRegister){
    try {
      const response = await auth.createUserWithEmailAndPassword(email, password);
      return response;
    }catch (error){
      console.log(error);
      throw { error }
    }
  }
}

