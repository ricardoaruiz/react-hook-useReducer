import { StyledIcon } from '@styled-icons/styled-icon'

/**
 * Type for Vehicle
 */
export type Vehicle = {
  id: string
  name: string
  manufacturer: string
  fuel: string
  icon: StyledIcon
}

/**
 * State type for Vehicle
 */
export type VehicleState = {
  data: Vehicle[]
}

/**
 * Actions for Vehicle
 */
type VehicleAction = {
  type: 'add' | 'remove'
  payload: Vehicle | string
}

/**
 * Reducer for Vehicle
 * @param state
 * @param action
 * @returns new state
 */
export const reducer = (
  state: VehicleState,
  action: VehicleAction
): VehicleState => {
  switch (action.type) {
    case 'add':
      return {
        ...state,
        data: [...state.data, action.payload as Vehicle],
      }
    case 'remove':
      return {
        ...state,
        data: state.data.filter((vehicle) => vehicle.id !== action.payload),
      }
    default:
      return state
  }
}
