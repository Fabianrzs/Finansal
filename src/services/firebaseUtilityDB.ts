import { Utility } from "../models/Utility";
import { db } from "../utils/Firebase";
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
      const request = await get<Utility>(UTILITY);
      console.log("Request: ",request);
      return request
    }catch (error){
      console.log(error);
      throw {error}
    }
  }
  
}
