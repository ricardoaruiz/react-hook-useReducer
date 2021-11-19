import styled, { css } from 'styled-components'

export const Wrapper = styled.ul``

export const Empty = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: 2.5rem;
    text-align: center;
    padding: 1rem 0;
  `};
`
