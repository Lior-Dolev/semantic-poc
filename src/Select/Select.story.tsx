import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Select } from './index'
import { Icon } from '../index'

const options = [
	{ key: 1, text: 'Choice 1', value: 1 },
	{ key: 2, text: 'Choice 2', value: 2 },
	{ key: 3, text: 'Choice 3', value: 3 },
]

const optionsIcons = [
	{ key: 1, text: 'Choice 1', value: 1, icon: "plus" },
	{ key: 2, text: 'Choice 2', value: 2, icon: "plus" },
	{ key: 3, text: 'Choice 3', value: 3, icon: "plus" },
]


storiesOf('Semantic', module)
	.add('Select', () => (
		<div style={{ padding: 10 }}>
			<p>{' '}Combo Default</p>
			<Select options={options}></Select>
			<hr />
			<p>Default Disable</p>
			<Select options={options} disabled></Select>
			<hr />
			<p>Default Invalid</p>
			<Select options={options} error></Select>
			<hr />
			<p>Read Only</p>
			<Select options={options} disabled readOnly></Select>
			<hr />
			<p>{' '}Combo Box</p>
			<Select styleType={'cb'} options={optionsIcons} ></Select>
			<hr />
			<p>{' '}Combo Box Disabled</p>
			<Select styleType={'cb'} options={optionsIcons} disabled></Select>
			<hr />
			<p>{' '}Combo Box Read Only</p>
			<Select styleType={'cb'} options={optionsIcons} disabled readOnly></Select>
			<hr />
			<p>{' '}Combo Box Invalid</p>
			<Select styleType={'cb'} options={optionsIcons} error></Select>

		</div>
	))
