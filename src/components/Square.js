import React from 'react'

const Square = ({value, onClick}) => (
  <button className="square" onClick={ onClick }>
    { value }
  </button>
)

Square.propTypes = {
  value: React.PropTypes.string,
  onClick: React.PropTypes.func.isRequired,
}

module.exports = Square
