import {
  initializeSquareAction,
  initializePlayerAction,
  addSquareAction,
  changePlayerAction,
} from '../../src/actions/index'

describe('ACTIONS', () => {
  it('Should create an action to initialize squares', () => {
    expect(initializeSquareAction()).toMatchSnapshot()
  })

  it('Should create an action to initialize player', () => {
    expect(initializePlayerAction()).toMatchSnapshot()
  })

  it('Should create an action to add square', () => {
    const wrapper = (index, symbol) => ({
      type: 'ADD_SQUARE',
      index,
      symbol,
    })
    expect(addSquareAction(1, 'X')).toEqual(wrapper(1, 'X'))
    expect(addSquareAction(1, 'X')).toMatchSnapshot()
  })

  it('Should create an action to change player', () => {
    const wrapper = currentPlayer => ({
      type: 'CHANGE_PLAYER',
      currentPlayer,
    })
    expect(changePlayerAction('X')).toEqual(wrapper('X'))
    expect(changePlayerAction('X')).toMatchSnapshot()
  })
})
