import React from 'react'
import { StyledIcon } from '@styled-icons/styled-icon'

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
  icon: StyledIcon
}

const Vehicle: React.VFC<VehicleProps> = ({
  data: { id, name, manufacturer, fuel, icon: Icon },
  onClick,
  onDelete,
}) => {
  const [componentState, setComponentState] = React.useState<
    'in' | 'out' | 'ready'
  >('in')

  const classes = React.useMemo(() => {
    if (componentState === 'in')
      return 'animate__animated animate__lightSpeedInLeft'
    if (componentState === 'out')
      return 'animate__animated animate__lightSpeedOutRight'
    if (componentState === 'ready') return ''
  }, [componentState])

  /**
   * Handle delete button click
   */
  const handleDeleteItemClick = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: string) => {
      event.stopPropagation()
      setComponentState('out')
      setTimeout(() => {
        onDelete && onDelete(id)
      }, 1000)
    },
    [onDelete]
  )

  React.useEffect(() => {
    setTimeout(() => {
      setComponentState('ready')
    }, 500)
  }, [])

  return (
    <S.Wrapper onClick={() => onClick && onClick(id)} className={classes}>
      <S.Content>
        <S.ItemContent>{name}</S.ItemContent>
        <S.ItemContent>
          {manufacturer} <Icon className="brand" />
        </S.ItemContent>
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
