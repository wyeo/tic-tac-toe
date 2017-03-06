import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers } from 'redux'
import { Provider } from 'react-redux'
import Game from './components/Game'
import { createStore } from './store/createStore'
import { changeSquares, changePlayer } from './reducers/index'

const finalReducer = combineReducers({
  squares: changeSquares,
  currentPlayer: changePlayer,
})

const store = createStore(finalReducer)

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>, document.getElementById('main'))
