import React from 'react'
import { useHistory } from 'react-router-dom'

import faker from 'faker'

import { VehicleList } from '../../components'

import * as S from './styles'

faker.locale = 'pt_BR'

type Vehicle = {
  id: string
  name: string
  manufacturer: string
  fuel: string
}

export const Vehicles: React.FC = () => {
  const history = useHistory()

  const [vehicles] = React.useState<Vehicle[]>(() => {
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

  const handleItemClick = React.useCallback(
    (id) => {
      history.push('/vehicle', {
        data: vehicles.find((item) => item.id === id),
      })
    },
    [history, vehicles]
  )

  return (
    <S.Container>
      <S.Title>Vehicles</S.Title>
      <VehicleList data={vehicles} onItemClick={handleItemClick} />
    </S.Container>
  )
}
