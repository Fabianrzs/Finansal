import { db } from "../utils/Firebase";

export default {
  async add<T extends Object>(coleccion:string, data: T){
    return await db.collection(coleccion).add(data);
  },
  async get<TEntity extends Object>(coleccion:string) : Promise<TEntity[]>{
    //return await EncryptedStorage.getItem('token').then((response) => {return response});
    let data: TEntity[] = [];
    db.collection(coleccion).get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
        data.push(doc.data() as TEntity);
        console.log(data,"Datas ");
      });
    });
    return data;
  },
  async delete<T extends Object>(coleccion:string, data: T){
    return await db.collection(coleccion).add(data);
  },
  async update<T extends Object>(coleccion:string, data: T){
    return await db.collection(coleccion).add(data);
  },
}
