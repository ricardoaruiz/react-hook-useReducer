import React from 'react'
import { useHistory, useParams } from 'react-router-dom'

import { useGlobalContext } from '../../commons/context/GlobalContext'
import { Button } from '../../components/Button'

import * as S from './styles'

export const Vehicle: React.VFC = () => {
  const history = useHistory()
  const { id } = useParams<{ id: string }>()
  const { getVehicle, counter } = useGlobalContext()

  const data = React.useMemo(() => {
    if (!id) {
      history.push('/')
      return null
    }

    const vehicle = getVehicle(id)

    return {
      name: vehicle?.name,
      manufacturer: vehicle?.manufacturer,
      fuel: vehicle?.fuel,
    }
  }, [getVehicle, history, id])

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

        <p>Added new {counter} vehicles</p>
      </S.Container>
    )
  )
}
