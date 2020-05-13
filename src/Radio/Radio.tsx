import * as React from 'react'
import { Radio as SRadio, RadioProps } from 'semantic-ui-react'
import classnames from 'classnames'
import '../../cp-theme/semantic.less'

interface InternalRadioProps extends RadioProps {
  invalid?: boolean;
}

export const Radio = (props: InternalRadioProps) => {
  const {
    invalid,
    ...rest
  } = props;
  const className = classnames('cp-radio', {invalid})

  return (
    <SRadio
      className={className}
      {...rest}
    />
  )
}