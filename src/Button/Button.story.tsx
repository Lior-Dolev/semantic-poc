import * as React from 'react'
import { storiesOf } from '@storybook/react' 
import { Button } from './index'

storiesOf('Semantic', module)
.add('Button', () => (
  <div style={{padding: 10}}>
    <p>Default</p>
    <Button>Default</Button>
    <hr />
    <p>Disabled</p>
    <Button disabled>Disabled</Button>
    <hr />
    <p>Invalid</p>
    <Button invalid>Validation</Button>
    <hr />
    <p>Primary</p>
    <Button styleType={'primary'}>Button</Button>
    <hr />
    <p>Primary - Disabled</p>
    <Button styleType={'primary'} disabled>Disabled</Button>
    <hr />
    <p>Primary - Invalid</p>
    <Button styleType={'primary'} invalid>Validation</Button>
    <hr />
    <p>Ghost</p>
    <Button styleType={'ghost'}>Text</Button>
    <hr />
    <p>Ghost - Disabled</p>
    <Button styleType={'ghost'} disabled>Disabled</Button>
    <hr />
  </ div>
))

