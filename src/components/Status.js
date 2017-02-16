import React from 'react'
import calculateWinner from '../calculateWinner'

const StatusContainer = ({ squares, currentPlayer }) => {
  let status
  let state
  const winner = calculateWinner(squares)

  if (squares.filter(x => x !== 'X' && x !== 'O').length === 0) {
    status = 'DRAW'
    state = 'draw'
  } else if (winner) {
    status = `Winner is : ${winner}`
    state = 'winner'
  } else {
    status = `Next player : ${currentPlayer}`
  }
  return <div className={state}>{status}</div>
}

StatusContainer.defaultProps = {
  currentPlayer: '',
}

StatusContainer.propTypes = {
  squares: React.PropTypes.array.isRequired,
  currentPlayer: React.PropTypes.string.isRequired,
}

module.exports = StatusContainer
