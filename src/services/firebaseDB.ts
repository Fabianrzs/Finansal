import { db } from "../utils/FireBase";

export default {
  async add<T extends Object>(coleccion:string, data: T){
    return await db.collection(coleccion).add(data);
  },
  async get(coleccion:string){
    return db.collection(coleccion).onSnapshot(data => data.docs);
  },
  async delete<T extends Object>(coleccion:string, data: T){
    return await db.collection(coleccion).add(data);
  },
  async update<T extends Object>(coleccion:string, data: T){
    return await db.collection(coleccion).add(data);
  },
}
