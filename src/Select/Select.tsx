import * as React from 'react'
import { Select as SSelect, SelectProps } from 'semantic-ui-react'
import classnames from 'classnames'
import '../../cp-theme/semantic.less'

interface InternalSelectProps extends SelectProps {
	styleType?: 'default' | 'cb' | 'ghost';
	invalid?: boolean;
	readOnly?: boolean,
}

export const Select = (props: InternalSelectProps) => {
	const {
		styleType = 'default',
		invalid,
		readOnly = false,
		onChange,
		...rest
	} = props;
	const className = classnames('cp-select', styleType, { invalid }, { readOnly })
	function userReadOnly(e) {
		if (readOnly) {
			console.log('hee', e.target)
			return
		}
	}
	return (
		<SSelect
			styleType
			placeholder={'Select'}
			className={className}
			onChange={userReadOnly}
			{...rest}
		/>
	)
}