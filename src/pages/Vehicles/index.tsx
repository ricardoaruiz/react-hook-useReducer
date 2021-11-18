import React from 'react'
import { useHistory } from 'react-router-dom'

import { useGlobalContext } from '../../commons/context/GlobalContext'
import { VehicleList } from '../../components'

import * as S from './styles'

export const Vehicles: React.FC = () => {
  const history = useHistory()
  const { vehicles } = useGlobalContext()

  const handleItemClick = React.useCallback(
    (id) => {
      history.push(`/vehicle/${id}`)
    },
    [history]
  )

  return (
    <S.Container>
      <S.Title>Vehicles</S.Title>
      <VehicleList data={vehicles} onItemClick={handleItemClick} />
    </S.Container>
  )
}
