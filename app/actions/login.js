import * as types from './types'

export const onLogin = loggedIn => {
  return {
    type: types.LOGIN,
    loggedIn
  }
}
