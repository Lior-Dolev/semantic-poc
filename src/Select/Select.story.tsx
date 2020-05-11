import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Select } from './index'

storiesOf('Select', module)
	.add('Select', () => (
		<div style={{ padding: 10 }}>
			<p>{' '}Combo Default</p>
			<Select></Select>
			<hr />
			<p>Default Disable</p>
			<Select disabled></Select>
			<hr />
			<p>Default Invalid</p>
			<Select invalid></Select>
			<hr />
			<p>{' '}Combo Box</p>
			<Select styleType={'snow'}></Select>

		</div>
	))
