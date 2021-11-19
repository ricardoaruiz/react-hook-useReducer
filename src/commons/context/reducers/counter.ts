/**
 * State type
 */
export type State = {
  counter: number
}

/**
 * Actions type
 */
type Action = {
  type: 'increment' | 'decrement'
}

/**
 * Counter reducer
 * @param state
 * @param action
 * @returns new state
 */
export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'increment':
      return { counter: state.counter + 1 }
    case 'decrement':
      return { counter: state.counter - 1 }
    default:
      return state
  }
}
