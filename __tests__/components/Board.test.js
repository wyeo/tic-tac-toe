import React from 'react'
import { shallow } from 'enzyme'
import Board from '../../src/components/Board'

describe('<Board />', () => {
  it('BOARD render the ninth square', () => {
    const wrapper = shallow(
      <Board
        squares={Array(9).fill(null)}
        onClick={() => null}
      />,
    )
    expect(wrapper.text().length).toEqual(90)
  })
})
