import React from 'react'

import { State, reducer } from '../reducers/counter'

export type UseCounterType = {
  counter: number
  increment: () => void
  decrement: () => void
}

/**
 * Initial state
 */
const initialState: State = { counter: 0 }

export const useCounter = (): UseCounterType => {
  /**
   * State and dispatchers
   */
  const [state, counterDispatch] = React.useReducer(reducer, initialState)

  /**
   * Increment one on state counter
   */
  const increment = React.useCallback(() => {
    counterDispatch({ type: 'increment' })
  }, [])

  /**
   * Decremente one on state counter
   */
  const decrement = React.useCallback(() => {
    counterDispatch({ type: 'decrement' })
  }, [])

  return {
    counter: state.counter,
    increment,
    decrement,
  }
}
