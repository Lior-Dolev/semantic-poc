import * as React from 'react'
import { storiesOf } from '@storybook/react' 
import { Radio } from './index'

storiesOf('Semantic', module)
.add('Radio', () => (
  <div style={{padding: 10}}>
    <p>Default</p>
    <Radio />
    <br />
    <Radio defaultChecked />
    <hr />
    <p>Disabled</p>
    <Radio disabled/>
    <br />
    <Radio disabled defaultChecked/>
    <hr />
    <p>Invalid</p>
    <Radio invalid/>
    <br />
    <Radio invalid defaultChecked/>
    <hr />
    <p>Read Only</p>
    <Radio readOnly/>
    <br />
    <Radio readOnly defaultChecked/>
    <hr />
  </ div>
))

