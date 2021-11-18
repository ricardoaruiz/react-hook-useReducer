import styled, { css } from 'styled-components'
import { DeleteDismiss } from '@styled-icons/fluentui-system-regular/DeleteDismiss'

export const Content = styled.div``

export const ItemContent = styled.p`
  font-weight: 600;
  & + p {
    margin-top: 0.4rem;
  }
`

export const Actions = styled.div``

export const DeleteButton = styled(DeleteDismiss)`
  ${({ theme }) => css`
    width: 1.8rem;
    color: ${theme.colors.black};
  `};
`

export const Wrapper = styled.li`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    border-radius: 0.2rem;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
    cursor: pointer;

    & + li {
      margin-top: 0.5rem;
    }

    &:hover {
      background-color: ${theme.colors.privaryHover};

      ${ItemContent} {
        color: ${theme.colors.black};
      }
    }
  `};
`
