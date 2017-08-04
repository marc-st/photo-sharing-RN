import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const loadFeed = createReducer({}, {
  [types.LOAD_FEED](state, action){
    return {
      ...state,
      data: action.data
    }
  }
})
export const updatePosition = createReducer({}, {
  [types.UPDATE_POSITION](state, action){
    return {
      ...state,
      lat: action.lat,
      lon: action.lon
    }
  }
})
