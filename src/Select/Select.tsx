import * as React from 'react'
import { Select as SSelect, SelectProps } from 'semantic-ui-react'
import classnames from 'classnames'
import '../../cp-theme/semantic.less'

const options = [
	{ key: 1, text: 'Choice 1', value: 1 },
	{ key: 2, text: 'Choice 2', value: 2 },
	{ key: 3, text: 'Choice 3', value: 3 },
]

export const Select = (props) => {
	const {
		invalid,
		readOnly,
		styleType = 'default',
		...rest
	} = props;
	const className = classnames('cp-select', styleType, { invalid })
	return (
		<SSelect
			placeholder={'Select Option'}
			className={className}
			options={options}
			readOnly={false}
			{...rest}
		/>
	)
}