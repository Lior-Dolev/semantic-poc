import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Segment } from './index'

storiesOf('Semantic', module)
	.add('Segment', () => (
		<div style={{ padding: 10 }}>
			<p>Default</p>
			<Segment>text that is passed</Segment>
		</ div>
	))