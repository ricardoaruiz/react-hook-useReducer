import styled from 'styled-components'

export const Container = styled.section`
  max-width: 60rem;
  margin: 1rem auto 0 auto;
  padding: 0 1rem;
`

export const Title = styled.h1`
  font-size: 4rem;
  padding: 2rem 0;
  text-align: center;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;
`
