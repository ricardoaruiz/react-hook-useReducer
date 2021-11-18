import React from 'react'

import { Vehicle, VehicleData } from './components/Vehicle'

import * as S from './styles'

type VehiclesProps = {
  data: VehicleData[]
  onItemClick?: (id: string) => void
  onItemDelete?: (id: string) => void
}

export const VehicleList: React.VFC<VehiclesProps> = ({
  data,
  onItemClick,
  onItemDelete,
}) => {
  return (
    <S.Wrapper>
      {!data.length && <S.Empty>No vehicles to list</S.Empty>}

      {data.map((item) => (
        <Vehicle
          key={item.id}
          data={item}
          onClick={onItemClick}
          onDelete={onItemDelete}
        />
      ))}
    </S.Wrapper>
  )
}
