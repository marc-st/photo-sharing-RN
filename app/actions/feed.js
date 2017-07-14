import * as types from './types'

export function loadFeed(){
  return (dispatch, getState) => {
    // put files in data
    // dispatch(loadedFeed(data))s
  }
}
const loadedFeed = (data) => {
  return {
    type: types.LOAD_FEED,
    data
  }
}
