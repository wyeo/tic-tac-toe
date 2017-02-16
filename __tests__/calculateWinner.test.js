const calculateWinner = require('../src/calculateWinner')

test('DRAW!', () => {
  expect(calculateWinner([
    'X', 'O', 'X',
    'O', 'O', 'X',
    'O', 'X', 'O',
  ])).toMatchSnapshot()
})

test('X is Winner', () => {
  expect(calculateWinner([
    'X', 'X', 'X',
    '', '', '',
    '', '', '',
  ])).toMatchSnapshot()
})

test('X is Winner', () => {
  expect(calculateWinner([
    'X', '', '',
    'X', '', '',
    'X', '', '',
  ])).toMatchSnapshot()
})

test('X is Winner', () => {
  expect(calculateWinner([
    '', '', 'X',
    '', '', 'X',
    '', '', 'X',
  ])).toMatchSnapshot()
})

test('X is Winner', () => {
  expect(calculateWinner([
    '', '', '',
    '', '', '',
    'X', 'X', 'X',
  ])).toMatchSnapshot()
})

test('X is Winner', () => {
  expect(calculateWinner([
    'X', '', '',
    '', 'X', '',
    '', '', 'X',
  ])).toMatchSnapshot()
})

test('X is Winner', () => {
  expect(calculateWinner([
    '', 'X', '',
    '', 'X', '',
    '', 'X', '',
  ])).toMatchSnapshot()
})

test('X is Winner', () => {
  expect(calculateWinner([
    '', '', 'X',
    '', 'X', '',
    'X', '', '',
  ])).toMatchSnapshot()
})

test('X is Winner', () => {
  expect(calculateWinner([
    '', '', '',
    'X', 'X', 'X',
    '', '', '',
  ])).toMatchSnapshot()
})
