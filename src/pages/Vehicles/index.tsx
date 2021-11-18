import React from 'react'
import { useHistory } from 'react-router-dom'

import { useGlobalContext } from '../../commons/context/GlobalContext'
import { Button, VehicleList } from '../../components'

import * as S from './styles'

export const Vehicles: React.FC = () => {
  const history = useHistory()
  const { vehicles, addVehicle, removeVehicle } = useGlobalContext()

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

  return (
    <S.Container>
      <S.Title>Vehicles</S.Title>
      <VehicleList
        data={vehicles}
        onItemClick={handleItemClick}
        onItemDelete={handleItemDeleteClick}
      />

      <S.Actions>
        <Button onClick={addVehicle}>add new</Button>
      </S.Actions>
    </S.Container>
  )
}
