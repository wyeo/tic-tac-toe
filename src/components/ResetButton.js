import React from 'react'

const ResetButton = ({ initPlayer, initSquare }) => {
  function handleClick() {
    initPlayer()
    initSquare()
  }
  return <button onClick={handleClick}>Reset</button>
}

ResetButton.propTypes = {
  initSquare: React.PropTypes.func.isRequired,
  initPlayer: React.PropTypes.func.isRequired,
}

module.exports = ResetButton
