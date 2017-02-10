import React from 'react'
import Board from './Board'
import Status from './Status'
import calculateWinner from '../calculateWinner'

class Game extends React.Component {

  constructor() {
    super()
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    }
  }

  handleClick(i) {
    const squares = this.state.squares.slice(0)
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O'
    this.setState({
      squares,
      xIsNext: !this.state.xIsNext,
    })
  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={this.state.squares}
            onClick={i => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <Status
            squares={this.state.squares}
            xState={this.state.xIsNext}
          />
        </div>
      </div>
    )
  }

}
module.exports = Game
