import React from 'react'
import calculateWinner from '../calculateWinner'

const StatusContainer = ({ value, xState }) => {
  let status
  let state
  const history = value
  const current = history[history.length - 1]
  const winner = calculateWinner(current.squares)

  if (current.squares.filter(x => x !== 'X' && x !== 'O').length === 0) {
    status = 'DRAW'
    state = 'draw'
  } else {
    status = `Next player: ${(xState ? 'X' : 'O')}`
  }
  if (winner) {
    status = `Winner is : ${winner}`
    state = 'winner'
  }
  return <div className={state}>{status}</div>
}

StatusContainer.propTypes = {
  value: React.PropTypes.shape.isRequired,
  xState: React.PropTypes.bool.isRequired,
}

module.exports = StatusContainer
