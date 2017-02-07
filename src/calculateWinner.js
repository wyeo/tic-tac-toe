let calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

const minScore = (squares) => {
  if (calculateWinner(squares) === 'X') {
    return 10
  }
  else if (calculateWinner(squares) === 'O') {
    return -10
  }
  else {
    let bestMoveValue = 100
    for (var i = 0; i < squares.length; i++) {
      let tmpSquare = validMove(i, 'O', squares)
      if (tmpSquare) {
        let predictedMoveValue = maxScore(tmpSquare)
        if (predictedMoveValue < bestMoveValue) {
          bestMoveValue = predictedMoveValue
        }
      }
    }
    return bestMoveValue
  }
}

const maxScore = (squares) => {
  if (calculateWinner(squares) === 'X') {
    return 10
  }
  else if (calculateWinner(squares) === 'O') {
    return -10
  }
  else {
    let bestMoveValue = -100
    for (var i = 0; i < squares.length; i++) {
      let tmpSquare = validMove(i, 'O', squares)
      if (tmpSquare) {
        let predictedMoveValue = minScore(tmpSquare)
        if (predictedMoveValue > bestMoveValue) {
          bestMoveValue = predictedMoveValue
        }
      }
    }
    return bestMoveValue
  }
}

const validMove = (index, player, squares) => {

  let tmpSquares = squares ? squares.slice(0) : []

  if (!tmpSquares[index]) {
    tmpSquares[index] = player
    return tmpSquares
  } else {
    return null
  }
}

const minimax = (squares) => {
  let
    bestMoveScore = 100,
    move = null

  if (calculateWinner(squares)) {
    return null
  }

  for (let i = 0; i < squares.length; i++) {
    let tmpSquare = validMove(i, 'O', squares)
    if (tmpSquare) {
      let moveScore = maxScore(tmpSquare)
      if (moveScore < bestMoveScore) {
        bestMoveScore = moveScore
        move = i
      }
    }
  }
  return move
}

// console.log(minimax([
//   'O', null, 'X',
//   'X', null, null,
//   'X', 'O', 'O'
// ]))

module.exports = calculateWinner
