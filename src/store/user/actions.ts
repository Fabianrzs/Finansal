export type AuthAction =
  | {type: 'signUp', payload: {token: string, user: any}}
  | {type: 'addError', payload: string}
  | {type: 'removeError'}
  | {type: 'no-auth'}
  | {type: 'logout'}
  | {type: 'loaded'}
