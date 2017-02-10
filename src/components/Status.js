import React from 'react'
import calculateWinner from '../calculateWinner'

const StatusContainer = ({ squares, xState }) => {
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
    status = `Next player: ${(xState ? 'X' : 'O')}`
  }
  return <div className={state}>{status}</div>
}

StatusContainer.propTypes = {
  squares: React.PropTypes.array.isRequired,
  xState: React.PropTypes.bool.isRequired,
}

module.exports = StatusContainer
