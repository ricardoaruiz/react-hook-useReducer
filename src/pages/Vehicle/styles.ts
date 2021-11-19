import styled, { css } from 'styled-components'

export const Container = styled.section`
  max-width: 60rem;
  margin: 1rem auto 0 auto;
  padding: 0 1rem;

  @media (max-width: 600px) {
    margin: 0 1rem;
  }
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

export const Content = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 0.4rem;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  `};
`

export const Information = styled.div`
  margin-bottom: 1.5rem;
`

export const Label = styled.p`
  ${({ theme }) => css`
    font-size: 1.5rem;
    font-weight: 800;
    color: ${theme.colors.white};
    margin-bottom: 0.5rem;
  `}
`

export const Text = styled.p`
  ${({ theme }) => css`
    font-size: 2.5rem;
    color: ${theme.colors.white};

    & .brand {
      width: 3rem;
    }
  `}
`

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
`
