// import * as React from 'react'
// import { Menu, Dropdown as SDropdown, DropdownProps, Select } from 'semantic-ui-react'
// import classnames from 'classnames'
// import '../../cp-theme/semantic.less'


// const options = [
// 	{ key: 1, text: 'Choice 1', value: 1 },
// 	{ key: 2, text: 'Choice 2', value: 2 },
// 	{ key: 3, text: 'Choice 3', value: 3 },
// ]

// interface InternalDropdownProps extends DropdownProps {
// 	// onClick?: { func }
// 	// onChange?: { func }
// 	styleType?: 'selected'
// }

// export const Dropdown = (props: InternalDropdownProps) => {
// 	const {
// 		styleType,
// 		options,
// 		...rest
// 	} = props;
// 	const className = classnames('cp-dropdown', {})
// 	return (
// 		<Menu compact className={'dropdown-menu'}>
// 			<SDropdown
// 				selection
// 				text='Dropdown' options={options}
// 				className={className}
// 				{...rest}
// 			/>
// 		</Menu>
// 	)
// }

import * as React from 'react'
import { Select as SSelect, SelectProps } from 'semantic-ui-react'
import classnames from 'classnames'
// import '../../cp-theme/semantic.less'

const options = [
	{ key: 1, text: 'Choice 1', value: 1 },
	{ key: 2, text: 'Choice 2', value: 2 },
	{ key: 3, text: 'Choice 3', value: 3 },
]

interface InternalSelectProps extends SelectProps {
	styleType?: 'selected'
}

export const Select = () => {
	// const {
	// 	styleType,
	// 	...rest
	// } = props;
	const className = classnames('cp-dropdown', {})
	return (
		// <Menu compact className={'dropdown-menu'}>
		<SSelect
			options={options}
		// fluid selection options={options}
		// text='Select'
		// className={className}
		// {...rest}
		/>
		// </Menu>
	)
}