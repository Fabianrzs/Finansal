import React, { createContext, useReducer, useState } from "react";
import { authReducer, AuthState } from "../store/user/reducer";
import { UserLogin, UserRegister } from "../models/User";
import localApi  from "../services/localApi";
import api from "../services/api";
import firebase from "../services/firebaseService";

type AuthContextProps = {
  errorMessage: string;
  token: string | null;
  user: any;
  status: 'checking' | 'auth' | 'no-auth';
  signUp: (data: UserRegister) => void;
  signIn: (data: UserLogin) => void;
  logOut: () => void;
  removeError: () => void;
}

const authInicialState: AuthState = {
  status: 'checking',
  token: null,
  user: null,
  errorMessage: ''
}

export const AuthContext = createContext({} as AuthContextProps)

export const AuthProvider = ({children}: {children: JSX.Element | JSX.Element[]}) =>{
  
  const [ state, dispatch ] = useReducer( authReducer, authInicialState );
  
  const {apiRestPost} = api
  const {login, register} =firebase
  
  const signUp = async (data: UserRegister) => {
    try {
      const response = await register(data)
      console.log(response);
      return response
    }catch (error){
      console.log({error});
    }
  };
  const signIn = async (data: UserLogin) => {
    try {
      const response = await login(data)
      console.log(response);
      return response
    }catch (error){
      console.log({error});
    }
  };
  const logOut = () => {
  
  };
  const removeError = () => {
  
  };
  
  return (
    <AuthContext.Provider value={{...state, signUp, signIn, logOut, removeError,}}>
      {children}
    </AuthContext.Provider>
  )
}
