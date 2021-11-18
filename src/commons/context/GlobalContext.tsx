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
  getVehicle: (id: string) => Vehicle | undefined
}

const GlobalContext = createContext({} as GlobalContextType)

/**
 * GlobalContextProvider
 * @param children
 * @returns context
 */
export const GlobalContextProvider: React.FC = ({ children }) => {
  /**
   * State
   */
  const [vehicles, setVehicles] = React.useState<Vehicle[]>(() => {
    const temp: Vehicle[] = []

    Array.from({ length: 5 }, () => {
      temp.push({
        id: faker.datatype.uuid(),
        name: faker.vehicle.vehicle(),
        manufacturer: faker.vehicle.manufacturer(),
        fuel: faker.vehicle.fuel(),
      })
    })

    return temp
  })

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
