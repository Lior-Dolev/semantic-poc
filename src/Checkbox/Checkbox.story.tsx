import * as React from 'react'
import { storiesOf } from '@storybook/react' 
import { Checkbox } from './index'

storiesOf('Semantic', module)
.add('Checkbox', () => (
  <div style={{padding: 10}}>
    <p>Default</p>
    <Checkbox />
    <br />
    <Checkbox defaultChecked />
    <br />
    <Checkbox defaultIndeterminate/>
    <hr />
    <p>Disabled</p>
    <Checkbox disabled/>
    <br />
    <Checkbox disabled defaultChecked/>
    <br />
    <Checkbox disabled defaultIndeterminate/>
    <hr />
    <p>Invalid</p>
    <Checkbox invalid/>
    <br />
    <Checkbox invalid defaultChecked/>
    <br />
    <Checkbox invalid defaultIndeterminate/>
    <hr />
    <p>Read Only</p>
    <Checkbox readOnly/>
    <br />
    <Checkbox readOnly defaultChecked/>
    <br />
    <Checkbox readOnly defaultIndeterminate/>
    <hr />
  </ div>
))

