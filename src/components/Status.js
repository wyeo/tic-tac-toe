import React from 'react'
import calculateWinner from '../calculateWinner'

class StatusContainer extends React.Component {
  render() {
    let status
    const history = this.props.value
    const current = history[history.length - 1]
    const winner = calculateWinner(current.squares)

    if (current.squares.filter(x => x !== 'X' && x !== 'O').length === 0) {
      status = 'DRAW'
    } else {
      status = 'Next player: ' + (this.props.xState ? 'X' : 'O')
    }
    if (winner) status = 'Winner is : ' + winner
    return <StatusPresentational status={status} />
  }
}

StatusContainer.propTypes = {
  value: React.PropTypes.array.isRequired,
  xState: React.PropTypes.bool.isRequired,
}

const StatusPresentational = ({status}) => (
  <div className="status">{status}</div>
)

StatusPresentational.propTypes = {
  status: React.PropTypes.string.isRequired
}

module.exports = StatusContainer
