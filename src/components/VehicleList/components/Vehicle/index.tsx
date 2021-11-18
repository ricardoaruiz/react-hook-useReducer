import React from 'react'

import { Button } from '../../../Button'

import * as S from './styles'

export type VehicleProps = {
  data: VehicleData
  onClick?: (id: string) => void
  onDelete?: (id: string) => void
}

export type VehicleData = {
  id: string
  name: string
  manufacturer: string
  fuel: string
}

const Vehicle: React.VFC<VehicleProps> = ({
  data: { id, name, manufacturer, fuel },
  onClick,
  onDelete,
}) => {
  /**
   * Handle delete button click
   */
  const handleDeleteItemClick = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: string) => {
      event.stopPropagation()
      onDelete && onDelete(id)
    },
    [onDelete]
  )

  return (
    <S.Wrapper onClick={() => onClick && onClick(id)}>
      <S.Content>
        <S.ItemContent>{name}</S.ItemContent>
        <S.ItemContent>{manufacturer}</S.ItemContent>
        <S.ItemContent>{fuel}</S.ItemContent>
      </S.Content>

      <S.Actions>
        <Button
          variant="outlined"
          onClick={(e) => handleDeleteItemClick(e, id)}
        >
          <S.DeleteButton />
        </Button>
      </S.Actions>
    </S.Wrapper>
  )
}

const VehicleMemoized = React.memo(Vehicle)
export { VehicleMemoized as Vehicle }
