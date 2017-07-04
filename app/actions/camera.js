import * as types from './types'

export const takePicture = path => {
  return {
    type: types.TAKE_PICTURE,
    path
  }
}
