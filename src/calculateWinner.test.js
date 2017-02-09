const calculateWinner = require('./calculateWinner')

test('DRAW!', () => {
  expect(calculateWinner([
    'X', 'O', 'X',
    'O', 'O', 'X',
    'O', 'X', 'O',
  ])).toBe(null)
})

test('', () => {
  expect(calculateWinner([
    'X', 'X', 'X',
    '', '', '',
    '', '', '',
  ])).toBe('X')
})

test('', () => {
  expect(calculateWinner([
    'X', '', '',
    'X', '', '',
    'X', '', '',
  ])).toBe('X')
})

test('', () => {
  expect(calculateWinner([
    '', '', 'X',
    '', '', 'X',
    '', '', 'X',
  ])).toBe('X')
})

test('', () => {
  expect(calculateWinner([
    '', '', '',
    '', '', '',
    'X', 'X', 'X',
  ])).toBe('X')
})

test('', () => {
  expect(calculateWinner([
    'X', '', '',
    '', 'X', '',
    '', '', 'X',
  ])).toBe('X')
})

test('', () => {
  expect(calculateWinner([
    '', 'X', '',
    '', 'X', '',
    '', 'X', '',
  ])).toBe('X')
})

test('', () => {
  expect(calculateWinner([
    '', '', 'X',
    '', 'X', '',
    'X', '', '',
  ])).toBe('X')
})

test('', () => {
  expect(calculateWinner([
    '', '', '',
    'X', 'X', 'X',
    '', '', '',
  ])).toBe('X')
})
