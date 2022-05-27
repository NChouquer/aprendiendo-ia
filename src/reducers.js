import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import {RUN_BFS, RUN_DFS , MOVE_START, MOVE_GOAL, CHANGE_TILE, RESTART_BOARD} from './actions.js'

/*export default combineReducers({
  router: routerReducer,
  app: (state = {}, action) => state
})*/

const simReducer = (state = {}, action) => {
  switch(action.type){
    case RUN_BFS:
      return state
    case RUN_DFS:
      return state
    case MOVE_START:
      return state
    case MOVE_GOAL:
      return state
    case CHANGE_TILE:
      return state
    case RESTART_BOARD:
      return state
    default:
      return state
  }
}

const reducers = combineReducers({
  sim: simReducer
})

export default reducers