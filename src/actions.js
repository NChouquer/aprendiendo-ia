const INITIALIZE = 'INITIALIZE'
const RUN_BFS = 'RUN_BFS'
const RUN_DFS = 'RUN_DFS'
const MOVE_START = 'MOVE_START'
const MOVE_GOAL = 'MOVE_GOAL'
const CHANGE_TILE = 'CHANGE_TILE'
const RESTART_BOARD = 'RESTART_BOARD'

export const initialize = () => ({
  type: INITIALIZE
})

export const runBFS = () => (
  {type: RUN_BFS}
)

export const runDFS = () => (
  {type: RUN_DFS}
)

export const moveStart = () => (
  {type: MOVE_START}
)

export const moveGoal = () => (
  {type: MOVE_GOAL}
)

export const changeTile = () => (
  {type: CHANGE_TILE}
)

export const restartBoard = () => (
  {type: RESTART_BOARD}
)




