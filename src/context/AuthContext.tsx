import React, { createContext, useReducer, useState } from "react";
import { authReducer, AuthState } from "../store/user/reducer";

type AuthContextProps = {
  errorMessage: string;
  token: string | null;
  user: any;
  status: 'checking' | 'auth' | 'no-auth';
  signUp: () => void;
  signIn: () => void;
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

export const AuthProvider = ({children}: any) =>{
  
  const [ state, dispatch ] = useReducer( authReducer, authInicialState );
  
  const signUp = () => {
  
  };
  const signIn = () => {
  
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
