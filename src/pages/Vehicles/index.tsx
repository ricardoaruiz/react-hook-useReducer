import React from 'react'
import { useHistory } from 'react-router-dom'

import { useGlobalContext } from '../../commons/context/GlobalContext'
import { Button, VehicleList } from '../../components'

import * as S from './styles'

export const Vehicles: React.FC = () => {
  const buttonRef = React.useRef<HTMLButtonElement>(null)
  const history = useHistory()
  const { vehicles, addVehicle, removeVehicle, counter, increment } =
    useGlobalContext()

  /**
   * Handle item click
   */
  const handleItemClick = React.useCallback(
    (id) => {
      history.push(`/vehicle/${id}`)
    },
    [history]
  )

  /**
   * Handle delete button item click
   */
  const handleItemDeleteClick = React.useCallback(
    (id: string) => {
      removeVehicle(id)
    },
    [removeVehicle]
  )

  /**
   * Handle add new vehicle button click
   */
  const handleAddNewItemClick = React.useCallback(() => {
    addVehicle()
    increment()
  }, [addVehicle, increment])

  /**
   * Handle hover operation in an item
   */
  const handleButtonHover = React.useCallback((operation: 'in' | 'out') => {
    operation === 'in'
      ? buttonRef.current?.classList.add('animate__animated', 'animate__tada')
      : buttonRef.current?.classList.remove(
          'animate__animated',
          'animate__tada'
        )
  }, [])

  return (
    <S.Container>
      <S.Title>Vehicles</S.Title>
      <VehicleList
        data={vehicles}
        onItemClick={handleItemClick}
        onItemDelete={handleItemDeleteClick}
      />

      <S.Actions>
        <Button
          onClick={handleAddNewItemClick}
          onMouseEnter={() => handleButtonHover('in')}
          onMouseLeave={() => handleButtonHover('out')}
          ref={buttonRef}
        >
          added new {counter} vehicles
        </Button>
      </S.Actions>
    </S.Container>
  )
}
