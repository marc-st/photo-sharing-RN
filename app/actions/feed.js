import * as types from './types'

export const loadFeed = data => {
  return {
    type: types.LOAD_FEED,
    data
  }
}
