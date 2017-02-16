import React from 'react'
import { shallow } from 'enzyme'
import Status from '../../src/components/Status'

const currentPlayer = 'X'
const squares = Array(9).fill(null) // [null, null, null...]
const squaresDraw = [
  'X', 'O', 'X',
  'X', 'O', 'X',
  'O', 'X', 'O',
]
const squaresWinner = [
  'X', 'O', '',
  'O', 'X', '',
  '', '', 'X',
]

describe('<Status />', () => {
  it('Test EMPTY', () => {
    const wrapper = shallow(
      <Status
        squares={squares}
        currentPlayer={currentPlayer}
      />,
    )

    expect(wrapper.hasClass('')).toMatchSnapshot()
    expect(wrapper.text()).toMatchSnapshot()
  })

  it('Test DRAW [className + text]', () => {
    const wrapper = shallow(
      <Status
        squares={squaresDraw}
        currentPlayer={currentPlayer}
      />,
    )
    expect(wrapper.hasClass('draw')).toMatchSnapshot()
    expect(wrapper.text()).toMatchSnapshot()
  })

  it('Test Winner [className + text]', () => {
    const wrapper = shallow(
      <Status
        squares={squaresWinner}
        currentPlayer={currentPlayer}
      />,
    )
    expect(wrapper.hasClass('winner')).toMatchSnapshot()
    expect(wrapper.text()).toMatchSnapshot()
  })
})
