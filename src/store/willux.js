const createStore = (reducer) => {
  let state
  let listeners = []

  const getState = () => state

  const dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach(listener => listener())
  }

  const subscribe = (listener) => {
    listeners.push(listener)
    // Unsubscribe method
    return () => {
      listeners = listeners.filter(l => l !== listener)
    }
  }
  // For initial state
  dispatch({})

  return { getState, dispatch, subscribe }
}

const combineReducers = reducers => (state = {}, action) =>
  Object.keys(reducers).reduce(
    (nextState, key) => {
      nextState[key] = reducers[key](
        state[key],
        action,
      )
      return nextState
    },
    {},
  )

module.exports = {
  createStore,
  combineReducers,
}
