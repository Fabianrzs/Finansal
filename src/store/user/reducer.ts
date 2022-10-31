import { AddError, Loaded, Logout, NoAuth, RemoveError, SignUp } from "../ActionTypes";
import { AuthAction } from "./actions";

export interface AuthState {
  errorMessage: string,
  token: string | null,
  user: any
  status: 'checking' | 'auth' | 'no-auth'
}

export const authReducer = (state:AuthState, action:AuthAction):AuthState  => {
  switch (action.type) {
    case AddError:
      return {
        ...state,
        user: null,
        status : 'no-auth',
        token: null,
        errorMessage: action.payload
      };
    case RemoveError:
      return {
        ...state,
        errorMessage: ''
      };
    case SignUp:
      return {
        ...state,
        errorMessage: '',
        status: 'auth',
        token: action.payload.token,
        user: action.payload.user
      };
    case Loaded:
      return {
        ...state,
        status: 'checking'
      };
    case Logout:
    case NoAuth:
      return {
        ...state,
        status : 'no-auth',
        user: null,
        token: null
      };
    default:
      return state;
  }
}
