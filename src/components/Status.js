import React from 'react'
import calculateWinner from '../calculateWinner'

class StatusContainer extends React.Component {
  render() {
    let status
    const history = this.props.value
    const current = history[history.length - 1]
    const winner = calculateWinner(current.squares)

    if (winner) status = 'Winner is : ' + winner
    else status = 'Next player: ' + (this.props.xState ? 'X' : 'O')

    return <StatusPresentational status={status} />
  }
}

const StatusPresentational = ({status}) => (
  <div className="status">{status}</div>
)

module.exports = StatusContainer
