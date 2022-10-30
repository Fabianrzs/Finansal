import axios, { AxiosRequestConfig } from "axios";

const baseURL = "https://172.29.80.1:44307/api"


const api = axios.create(
    {baseURL, headers: {
        'Content-Type': 'multipart/form-data',
        'Accept': "application/json",
      }
    },
  )

export default {
  async apiRestGet<TEntity>(path:string, body:{}): Promise<TEntity> {
    try {
      return await api.get(baseURL, body)
    } catch (err) {
      console.log(err);
      throw { err }
    }
  },
  async apiRestPost<TEntity>(path:string, body:{}): Promise<TEntity>{
    try {
      return await api.post(path, body )
    }catch (err){
      console.log(err);
      throw {err}
    }
  },
  async apiRestPut<TEntity>(path:string, body:{}): Promise<TEntity>{
    try {
      return await api.put(path, body)
    }catch (err){
      console.log(err);
      throw {err}
    }
  },
  async  apiRestpatch<TEntity>(path:string, body:{}): Promise<TEntity>{
    try {
      return await api.patch(path, body)
    }catch (err){
      console.log(err);
      throw {err}
    }
  },
  async  apiRestDelete<TEntity>(path:string, body:{}): Promise<TEntity>{
    try {
      return await api.delete(path, body)
    }catch (err){
      console.log(err);
      throw {err}
    }
  },
}
