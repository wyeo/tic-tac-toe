import React from 'react'
import calculateWinner from '../calculateWinner'

class StatusContainer extends React.Component {
  render() {
    let status, state
    const history = this.props.value
    const current = history[history.length - 1]
    const winner = calculateWinner(current.squares)

    if (current.squares.filter(x => x !== 'X' && x !== 'O').length === 0) {
      status = 'DRAW'
      state = 'draw'
    } else {
      status = 'Next player: ' + (this.props.xState ? 'X' : 'O')
    }
    if (winner) {
      status = 'Winner is : ' + winner
      state = 'winner'
    }
    return (
      <div>
        <div className={state}>{status}</div>
      </div>
    )
  }
}

StatusContainer.propTypes = {
  value: React.PropTypes.array.isRequired,
  xState: React.PropTypes.bool.isRequired,
}

module.exports = StatusContainer
