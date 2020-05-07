import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Select } from './index'
// import '../../cp-theme/semantic.less'

const options = [
	{ key: 1, text: 'Choice 1', value: 1 },
	{ key: 2, text: 'Choice 2', value: 2 },
	{ key: 3, text: 'Choice 3', value: 3 },
]

console.log('here')
storiesOf('Select', module)
	.add('Select', () => (
		<div style={{ padding: 10 }}>
			<p>{' '}First Select</p>
			<Select></Select>
			<hr />
		</div>
	))
