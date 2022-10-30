export interface UserLogin {
  email: string
  password: string
}

export const LoginValues: UserLogin = {
  email: '',
  password: ''
}

export interface UserRegister{
  firstName: string
  lastName: string
  email:string
  password: string
}
export const RegisterValues: UserRegister = {
  firstName: '',
  lastName: '',
  email:'',
  password: '',
}
