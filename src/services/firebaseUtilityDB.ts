import { Utility } from "../models/Utility";
import { db } from "../utils/FireBase";
import firebaseDB from  "./firebaseDB"
import { UTILITY } from "./constansCollections";
const {add, get, update,} =firebaseDB
export default {
  async saveUtility(utility: Utility){
    try{
      //const request = await db.collection("utilities").add(utility);
      const request = await add<Utility>(UTILITY, utility);
      console.log(request);
      return request
    }catch (error){
      console.log(error);
      throw {error}
    }
  },
  async getUtility(){
    try{
      console.log("Utility");
      //const request = await db.collection("utilities").get();
      const request = await get(UTILITY);
      console.log(request);
      return request
    }catch (error){
      console.log(error);
      throw {error}
    }
  }
  
}
