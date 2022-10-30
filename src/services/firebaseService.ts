
import { UserLogin, UserRegister } from "../models/User";
import { auth } from "../utils/FireBase";


export default{
  async login({ email,password }:UserLogin){
    try {
      const response = await auth.signInWithEmailAndPassword(email, password);
      return response;
    }catch (err){
      console.log(err);
      throw { err }
    }
  },
  async register({ email,password }:UserRegister){
    try {
      const response = await auth.createUserWithEmailAndPassword(email, password);
      return response;
    }catch (err){
      console.log(err);
      throw { err }
    }
  }
}

