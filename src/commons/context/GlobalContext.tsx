import React, { createContext, useContext } from 'react'

/**
 * Vehicle hook that contains state and use reducer
 */
import { useVehicle, UseVehicleType } from './hooks/useVehicle'

/**
 * Counter hook that contains state and use reducer
 */
import { useCounter, UseCounterType } from './hooks/useCounter'

type GlobalContextType = UseVehicleType & UseCounterType

const GlobalContext = createContext({} as GlobalContextType)
GlobalContext.displayName = 'GlobalContext'

/**
 * GlobalContextProvider
 * @param children
 * @returns context
 */
export const GlobalContextProvider: React.FC = ({ children }) => {
  const { vehicles, addVehicle, removeVehicle, getVehicle } = useVehicle()
  const { counter, decrement, increment } = useCounter()

  /**
   * Context exported object
   */
  const context: GlobalContextType = {
    vehicles,
    addVehicle,
    removeVehicle,
    getVehicle,
    counter,
    increment,
    decrement,
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
