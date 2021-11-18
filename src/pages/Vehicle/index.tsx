import React from 'react'

import { Button } from '../../components/Button'

import * as S from './styles'

export const Vehicle: React.VFC = () => {
  return (
    <S.Container>
      <S.Title>Vehicle</S.Title>

      <S.Content>
        <S.Information>
          <S.Label>Nome</S.Label>
          <S.Text>Renegade</S.Text>
        </S.Information>

        <S.Information>
          <S.Label>Marca</S.Label>
          <S.Text>Jeep</S.Text>
        </S.Information>

        <S.Information>
          <S.Label>Combustível</S.Label>
          <S.Text>Flex</S.Text>
        </S.Information>
      </S.Content>

      <S.Actions>
        <Button>Voltar</Button>
      </S.Actions>
    </S.Container>
  )
}
