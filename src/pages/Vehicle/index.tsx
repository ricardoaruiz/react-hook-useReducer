import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import { Button } from '../../components/Button'

import * as S from './styles'

type LocationType = {
  data: VehicleData
}

type VehicleData = {
  id: string
  name: string
  manufacturer: string
  fuel: string
}

export const Vehicle: React.VFC = () => {
  const history = useHistory()
  const { state } = useLocation<LocationType>()

  const data = React.useMemo(() => {
    if (!state) {
      history.push('/')
      return null
    }
    const { name, manufacturer, fuel } = state.data
    return { name, manufacturer, fuel }
  }, [history, state])

  return (
    data && (
      <S.Container>
        <S.Title>Vehicle</S.Title>

        <S.Content>
          <S.Information>
            <S.Label>Nome</S.Label>
            <S.Text>{data.name}</S.Text>
          </S.Information>

          <S.Information>
            <S.Label>Marca</S.Label>
            <S.Text>{data.manufacturer}</S.Text>
          </S.Information>

          <S.Information>
            <S.Label>Combustível</S.Label>
            <S.Text>{data.fuel}</S.Text>
          </S.Information>
        </S.Content>

        <S.Actions>
          <Button onClick={() => history.goBack()}>Voltar</Button>
        </S.Actions>
      </S.Container>
    )
  )
}
