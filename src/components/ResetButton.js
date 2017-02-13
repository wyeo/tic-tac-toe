import React from 'react'

class ResetButton extends React.Component {

  handleClick() {
    const { initSquare, initPlayer } = this.props.initGame
    initPlayer()
    initSquare()
  }

  render() {
    return <button onClick={() => this.handleClick()}>Reset</button>
  }
}

ResetButton.propTypes = {
  initGame: React.PropTypes.shape({
    initSquare: React.PropTypes.func.isRequired,
    initPlayer: React.PropTypes.func.isRequired,
  }).isRequired,
}

module.exports = ResetButton
