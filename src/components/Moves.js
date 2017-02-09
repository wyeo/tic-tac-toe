import React from 'react'

const Moves = ({ value }) => (<ol>{value}</ol>)

Moves.propTypes = { value: React.PropTypes.string.isRequired }

module.exports = Moves
