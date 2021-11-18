import React from 'react'

import { Vehicle, VehicleProps } from './components/Vehicle'

import * as S from './styles'

type VehiclesProps = {
  data: VehicleProps[]
}

export const VehicleList: React.VFC<VehiclesProps> = ({ data }) => {
  return (
    <S.Wrapper>
      {!data.length && <S.Empty>No vehicles to list</S.Empty>}

      {data.map((item) => (
        <Vehicle key={item.id} {...item} />
      ))}
    </S.Wrapper>
  )
}
