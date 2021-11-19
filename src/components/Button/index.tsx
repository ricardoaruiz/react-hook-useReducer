import React from 'react'

import * as S from './styles'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'outlined'
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'primary', ...rest }, ref) => (
    <S.Button variant={variant} {...rest} ref={ref}>
      {children}
    </S.Button>
  )
)
Button.displayName = 'Button'
