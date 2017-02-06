import React from 'react'
import Board from './Board'
import Status from './Status'
import Moves from './Moves'
import calculateWinner from '../calculateWinner'

let iter = 0
class Game extends React.Component {

  constructor() {
    super()
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      stepNumber: 0,
      xIsNext: true,
    }
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1)
    const current = history[history.length - 1]
    const squares = current.squares.slice()

    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O'
    this.setState({
      history: history.concat([{
        squares
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    })
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) ? false : true,
    })
  }

  render() {
    const history = this.state.history
    const current = history[this.state.stepNumber]
    const moves = history.map((step, move) => {
      const desc = move ? 'Move #' + move : 'Game start'
      return (
        <li key={iter++} onClick={() => this.jumpTo(move)}>
          <a href="#">{desc}</a>
        </li>
      )
    })
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={ current }
            onClick={ (i) => this.handleClick(i) }
          />
        </div>
        <div className="game-info">
          <Status
            value={this.state.history}
            xState={this.state.xIsNext}
          />
          <Moves
            value={moves}
          />
        </div>
      </div>
    )
  }
}

module.exports = Game
