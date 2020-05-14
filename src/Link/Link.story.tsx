import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Link } from './index'
import { Icon } from '../index'



storiesOf('Semantic', module)
	.add('Link', () => (
		<div style={{ padding: 10 }}>
			<p>test</p>
			<Link icon={<Icon name='caret right' />} text={'Zone Settings'}></Link>
		</div>

	))