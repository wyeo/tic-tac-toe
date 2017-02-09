import React from 'react'
import Square from './Square'

class Board extends React.Component {

  renderSquare(i) {
    const squares = this.props.squares.squares[i]

    return (
      <Square
        value={squares}
        onClick={() => this.props.onClick(i)}
      />
    )
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}

Board.propTypes = {
  squares: React.PropTypes.object.isRequired,
  onClick: React.PropTypes.func.isRequired,
}

module.exports = Board
