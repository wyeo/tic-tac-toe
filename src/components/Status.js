import React from 'react'
import calculateWinner from '../calculateWinner'

const StatusContainer = ({ squares, currentPlayer }) => {
  const winner = calculateWinner(squares)

  if (winner) {
    return <div className={'winner'}>{`Winner is : ${winner}`}</div>
  }
  if (squares.filter(x => x !== 'X' && x !== 'O').length === 0) {
    return <div className={'draw'}>DRAW</div>
  }
  return <div>{`Next player : ${currentPlayer}`}</div>
}

StatusContainer.defaultProps = {
  currentPlayer: '',
}

StatusContainer.propTypes = {
  squares: React.PropTypes.array.isRequired,
  currentPlayer: React.PropTypes.string.isRequired,
}

module.exports = StatusContainer
