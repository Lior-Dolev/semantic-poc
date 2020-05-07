import * as React from 'react'
import { Checkbox as SCheckbox, CheckboxProps } from 'semantic-ui-react'
import classnames from 'classnames'
import '../../cp-theme/semantic.less'

interface InternalCheckboxProps extends CheckboxProps {
  invalid?: boolean;
}

export const Checkbox = (props: InternalCheckboxProps) => {
  const {
    invalid,
    ...rest
  } = props;
  const className = classnames('cp-checkbox', {invalid})

  return (
    <SCheckbox
      className={className}
      {...rest}
    />
  )
}