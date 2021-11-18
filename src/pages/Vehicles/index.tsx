import React from 'react'
import faker from 'faker'

import { VehicleList } from '../../components'

import * as S from './styles'

faker.locale = 'pt_BR'

type Vehicle = {
  id: string
  name: string
  model: string
  fuel: string
}

export const Vehicles: React.FC = () => {
  const [vehicles] = React.useState<Vehicle[]>(() => {
    const temp: Vehicle[] = []

    Array.from({ length: 5 }, () => {
      temp.push({
        id: faker.datatype.uuid(),
        name: faker.vehicle.vehicle(),
        model: faker.vehicle.model(),
        fuel: faker.vehicle.fuel(),
      })
    })

    return temp
  })

  return (
    <S.Container>
      <S.Title>Vehicles</S.Title>
      <VehicleList data={vehicles} />
    </S.Container>
  )
}
