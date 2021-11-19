import styled, { css } from 'styled-components'
import { DeleteDismiss } from '@styled-icons/fluentui-system-regular/DeleteDismiss'

export const Content = styled.div``

export const ItemContent = styled.p`
  font-weight: 600;
  font-size: 2rem;
  & + p {
    margin-top: 0.8rem;
  }
`

export const Actions = styled.div``

export const DeleteButton = styled(DeleteDismiss)`
  ${({ theme }) => css`
    width: 2.5rem;
    color: ${theme.colors.black};
  `};
`

export const Wrapper = styled.li`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    border-radius: 0.2rem;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
    cursor: pointer;
    transition: all 0.2s;

    & + li {
      margin-top: 1rem;
    }

    &:hover {
      transform: scale(1.01);
      background-color: ${theme.colors.privaryHover};

      ${ItemContent} {
        color: ${theme.colors.black};
      }
    }
  `};
`
