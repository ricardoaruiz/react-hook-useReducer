import React, { createContext, useContext } from 'react'

/**
 * Vehicle hook that contains state and use reducer
 */
import { UseVehicleType, useVehicle } from './hooks/useVehicle'

type GlobalContextType = UseVehicleType

const GlobalContext = createContext({} as GlobalContextType)

/**
 * GlobalContextProvider
 * @param children
 * @returns context
 */
export const GlobalContextProvider: React.FC = ({ children }) => {
  const { vehicles, addVehicle, removeVehicle, getVehicle } = useVehicle()

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
