import * as types from './types'

export const loadFeed = data => {
  return {
    type: types.LOAD_FEED,
    data
  }
}
export const updatePosition = (lat ,lon) => {
  return {
    type: types.UPDATE_POSITION,
    lat,
    lon
  }
}
