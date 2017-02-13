import React from 'react'
import { connect } from 'react-redux'
import Board from './Board'
import Status from './Status'
import ResetButton from './ResetButton'
import calculateWinner from '../calculateWinner'

const handleClick = (i, {
  squares,
  currentPlayer,
  addSquare,
  changePlayer,
}) => {
  if (calculateWinner(squares) || squares[i]) {
    return;
  }
  addSquare(i, currentPlayer)
  changePlayer(currentPlayer)
}

const mapStateToProps = state => ({
  squares: state.squares,
  currentPlayer: state.currentPlayer,
})

const mapDispatchToProps = dispatch => ({
  initSquare: () => dispatch({ type: 'INITIALIZE_SQUARES' }),
  initPlayer: () => dispatch({ type: 'INITIALIZE_PLAYER' }),
  addSquare: (index, symbol) => dispatch({
    type: 'ADD_SQUARE',
    index,
    symbol,
  }),
  changePlayer: currentPlayer => dispatch({
    type: 'CHANGE_PLAYER',
    currentPlayer: currentPlayer === 'X' ? 'O' : 'X',
  }),
})

class GameP extends React.Component {
  componentDidMount() {
    this.props.initSquare()
    this.props.initPlayer()
  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={this.props.squares}
            onClick={i => handleClick(i, this.props)}
          />
        </div>
        <div className="game-info">
          <Status
            squares={this.props.squares}
            xState={this.props.currentPlayer}
          />
        </div>
        <ResetButton initGame={this.props} />
      </div>
    )
  }
}

const Game = connect(mapStateToProps, mapDispatchToProps)(GameP)

GameP.propTypes = {
  squares: React.PropTypes.array.isRequired,
  currentPlayer: React.PropTypes.string.isRequired,
  initSquare: React.PropTypes.func.isRequired,
  initPlayer: React.PropTypes.func.isRequired,
}

module.exports = Game
