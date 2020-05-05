import * as React from 'react'
import { storiesOf } from '@storybook/react' 
import { Button } from './index'

storiesOf('Button', module)
.add('Mixin', () => (
  <div style={{padding: 10}}>
    <p>Default</p>
    <Button>Submit</Button>
    <hr />
    <p>Disabled</p>
    <Button disabled>Submit</Button>
    <hr />
    {/* <p>Invalid</p>
    <Button invalid>Submit</Button>
    <hr /> */}
    <p>Primary</p>
    <Button styleType={'primary'}>Submit</Button>
    <hr />
    <p>Primary - Disabled</p>
    <Button styleType={'primary'} disabled>Submit</Button>
    <hr />
    {/* <p>Primary - Invalid</p>
    <Button styleType={'primary'} invalid>Submit</Button>
    <hr /> */}
    <p>Ghost</p>
    <Button styleType={'ghost'}>Submit</Button>
    <hr />
    <p>Ghost - Disabled</p>
    <Button styleType={'ghost'} disabled>Submit</Button>
    <hr />
  </ div>
))

