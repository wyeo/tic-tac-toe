import React from 'react'
import { shallow } from 'enzyme'
import Status from '../../src/components/Square'

describe('<Square />', () => {
  it('Render X', () => {
    const wrapper = shallow(
      <Status
        value={'X'}
        onClick={() => null}
      />,
    )
    expect(wrapper.text()).toMatchSnapshot()
  })
})
