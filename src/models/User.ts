export interface UserLogin {
  userName: string
  password: string
}

export const LoginValues: UserLogin = {
  userName: '',
  password: ''
}

export interface UserRegister{
  firstName: string
  lastName: string
  email:string
  userName: string
  password: string
}
export const RegisterValues: UserRegister = {
  firstName: '',
  lastName: '',
  email:'',
  userName: '',
  password: '',
}
