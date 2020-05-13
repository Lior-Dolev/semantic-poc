import * as React from 'react'
import { Icon as SIcon, IconProps } from 'semantic-ui-react'
import classnames from 'classnames'
import '../../cp-theme/semantic.less'

export const Icon = (props: IconProps) => {
  const {
    ...rest
  } = props;
  const className = classnames('cp-icon')

  return (
    <SIcon
      className={className}
      {...rest}
    />
  )
}