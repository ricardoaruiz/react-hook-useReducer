import React from 'react'

import { Button } from '../../../Button'

import * as S from './styles'

export type VehicleProps = {
  data: VehicleData
  onClick?: (id: string) => void
}

export type VehicleData = {
  id: string
  name: string
  manufacturer: string
  fuel: string
}

export const Vehicle: React.VFC<VehicleProps> = ({
  data: { id, name, manufacturer, fuel },
  onClick,
}) => {
  return (
    <S.Wrapper onClick={() => onClick && onClick(id)}>
      <S.Content>
        <S.ItemContent>{name}</S.ItemContent>
        <S.ItemContent>{manufacturer}</S.ItemContent>
        <S.ItemContent>{fuel}</S.ItemContent>
      </S.Content>

      <S.Actions>
        <Button variant="outlined">
          <S.DeleteButton />
        </Button>
      </S.Actions>
    </S.Wrapper>
  )
}
