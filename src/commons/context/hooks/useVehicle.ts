import React from 'react'
/**
 * Vehicle reducer
 */
import {
  Vehicle,
  VehicleState,
  reducer as vehicleReducer,
} from '../reducers/vehicle'

/**
 * Import vehicle util to generate initial random data
 */
import { generateInitialState, generateNewVehicle } from '../utils/vehicle'

export type UseVehicleType = {
  vehicles: Vehicle[]
  addVehicle: () => void
  removeVehicle: (id: string) => void
  getVehicle: (id: string) => Vehicle | undefined
}

/**
 * Initial state of vehicles
 */
const vehicleInitialState: VehicleState = { data: generateInitialState() }

export const useVehicle = (): UseVehicleType => {
  /**
   * State and dispatcher for vehicles
   */
  const [vehicles, vehicleDispatch] = React.useReducer(
    vehicleReducer,
    vehicleInitialState
  )

  /**
   * Add new vehicle
   */
  const addVehicle = React.useCallback(() => {
    vehicleDispatch({ type: 'add', payload: generateNewVehicle() })
  }, [])

  /**
   * Remove a vehicle
   */
  const removeVehicle = React.useCallback((id: string) => {
    vehicleDispatch({ type: 'remove', payload: id })
  }, [])

  /**
   * Get a specific vehicle
   */
  const getVehicle = React.useCallback(
    (id: string) => vehicles.data.find((item) => item.id === id),
    [vehicles.data]
  )

  /**
   * Hook exported
   */
  return {
    vehicles: vehicles.data,
    addVehicle,
    removeVehicle,
    getVehicle,
  }
}
