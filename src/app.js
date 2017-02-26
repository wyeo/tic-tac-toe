import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createLogger from 'redux-logger'
import Game from './components/Game'
// import { createStore } from './store/createStore'

import {
  changeSquares,
  changePlayer,
} from './reducers/index'

const finalReducer = combineReducers({
  squares: changeSquares,
  currentPlayer: changePlayer,
})

const configureStore = () => {
  const middlewares = []
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger())
  }

  return createStore(
    finalReducer,
    applyMiddleware(...middlewares),
  )
}

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>, document.getElementById('main'))
