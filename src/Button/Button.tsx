import * as React from 'react'
import { Button as SButton, ButtonProps } from 'semantic-ui-react'
import classnames from 'classnames'
import '../../cp-theme/semantic.less'

interface InternalButtonProps extends ButtonProps {
  styleType?: 'default' | 'primary' | 'ghost';
  invalid?: boolean;
}

export const Button = (props: InternalButtonProps) => {
  const {
    styleType = 'default',
    invalid,
    ...rest
  } = props;
  const className = classnames('cp-button', styleType, {invalid})

  return (
    <SButton
      className={className}
      {...rest}
    />
  )
}