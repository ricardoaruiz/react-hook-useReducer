import React, { createContext, useContext } from 'react'
import faker from 'faker'

faker.locale = 'pt_BR'

type Vehicle = {
  id: string
  name: string
  manufacturer: string
  fuel: string
}

type GlobalContextType = {
  vehicles: Vehicle[]
  addVehicle: () => void
  removeVehicle: (id: string) => void
  getVehicle: (id: string) => Vehicle | undefined
}

const GlobalContext = createContext({} as GlobalContextType)

/**
 * GlobalContextProvider
 * @param children
 * @returns context
 */
export const GlobalContextProvider: React.FC = ({ children }) => {
  const generateNewVehicle = React.useCallback(() => {
    return {
      id: faker.datatype.uuid(),
      name: faker.vehicle.vehicle(),
      manufacturer: faker.vehicle.manufacturer(),
      fuel: faker.vehicle.fuel(),
    }
  }, [])

  /**
   * State
   */
  const [vehicles, setVehicles] = React.useState<Vehicle[]>(() => {
    const temp: Vehicle[] = []

    Array.from({ length: 5 }, () => {
      temp.push(generateNewVehicle())
    })

    return temp
  })

  /**
   * Add new vehicle
   */
  const addVehicle = React.useCallback(() => {
    setVehicles((state) => [...state, generateNewVehicle()])
  }, [generateNewVehicle])

  /**
   * Remove a vehicle
   */
  const removeVehicle = React.useCallback((id: string) => {
    setVehicles((state) => state.filter((item) => item.id !== id))
  }, [])

  /**
   * Get a specific vehicle
   */
  const getVehicle = React.useCallback(
    (id: string) => vehicles.find((item) => item.id === id),
    [vehicles]
  )

  /**
   * Context exported object
   */
  const context: GlobalContextType = {
    vehicles,
    addVehicle,
    removeVehicle,
    getVehicle,
  }

  return (
    <GlobalContext.Provider value={context}>{children}</GlobalContext.Provider>
  )
}

/**
 * Hook to consume GlobalContext
 * @returns context
 */
export const useGlobalContext = () => {
  const context = useContext(GlobalContext)

  if (!context) {
    throw new Error('useGlobalContext must be used with GlobalContextProvider')
  }

  return context
}
