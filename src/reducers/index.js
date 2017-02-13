const changeSquares = (state = [], action) => {
  switch (action.type) {
    case 'INITIALIZE_SQUARES':
      return Array(9).fill(null)

    case 'ADD_SQUARE':
      return state.map((square, index) => {
        if (!square && action.index === index) {
          const newSquare = action.symbol
          return newSquare
        }
        return square
      })

    default:
      return state
  }
}

const changePlayer = (state = '', action) => {
  switch (action.type) {
    case 'INITIALIZE_PLAYER':
      return 'X'
    case 'CHANGE_PLAYER':
      return action.currentPlayer
    default:
      return state
  }
}

const associateReducers = (state = {}, action) => ({
  squares: changeSquares(state.squares, action),
  currentPlayer: changePlayer(state.currentPlayer, action),
})

module.exports.associateReducers = associateReducers
module.exports.changeSquares = changeSquares
module.exports.changePlayer = changePlayer
