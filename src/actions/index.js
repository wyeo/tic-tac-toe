export function initializeSquareAction() {
  return {
    type: 'INITIALIZE_SQUARES',
  }
}

export function initializePlayerAction() {
  return {
    type: 'INITIALIZE_PLAYER',
  }
}

export function addSquareAction(index, symbol) {
  return {
    type: 'ADD_SQUARE',
    index,
    symbol,
  }
}

export function changePlayerAction(currentPlayer) {
  return {
    type: 'CHANGE_PLAYER',
    currentPlayer,
  }
}
