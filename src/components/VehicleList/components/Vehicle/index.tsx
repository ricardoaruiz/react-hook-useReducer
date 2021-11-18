import React from 'react'
import { Button } from '../../..'

import * as S from './styles'

export type VehicleProps = {
  id: string
  name: string
  model: string
  fuel: string
}

export const Vehicle: React.VFC<VehicleProps> = ({ name, model, fuel }) => {
  return (
    <S.Wrapper>
      <S.Content>
        <S.ItemContent>{name}</S.ItemContent>
        <S.ItemContent>{model}</S.ItemContent>
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
