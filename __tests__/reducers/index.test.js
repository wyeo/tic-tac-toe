import {
  changeSquares,
  changePlayer,
} from '../../src/reducers/index'

describe('CHANGE SQUARE REDUCER', () => {
  it('should return the initial state', () => {
    expect(
      changeSquares(undefined, {}),
    ).toMatchSnapshot()
  })

  it('should return the new state with squares initialize', () => {
    expect(
      changeSquares([], {
        type: 'INITIALIZE_SQUARES',
      }),
    ).toMatchSnapshot()
  })

  it('should return the new state with square updated', () => {
    expect(
      changeSquares(Array(9).fill(null), {
        type: 'ADD_SQUARE',
        index: 1,
        symbol: 'X',
      }),
    ).toMatchSnapshot()
  })
})

describe('CHANGE PLAYER REDUCER', () => {
  it('should return the initial state', () => {
    expect(
      changePlayer(undefined, {}),
    ).toMatchSnapshot()
  })

  it('should return the initial player', () => {
    expect(
      changePlayer(undefined, { type: 'INITIALIZE_PLAYER' }),
    ).toMatchSnapshot()
  })

  it('should return the opposite of the current player (X)', () => {
    expect(
      changePlayer(undefined, { type: 'CHANGE_PLAYER', currentPlayer: 'X' }),
    ).toMatchSnapshot()
  })
})
