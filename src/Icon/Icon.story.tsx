import * as React from 'react'
import { storiesOf } from '@storybook/react' 
import { Icon } from './index'

const IconCard = ({name}) => (
  <div style={{paddingBottom: '10px'}}>
    <Icon name={name} />
    <span style={{paddingLeft: '10px'}}>{name}</span>
  </div>
)

storiesOf('Semantic', module)
.add('Icon', () => (
  <div style={{padding: 10}}>
    <IconCard name={'search'}/>
    <IconCard name={'plus'}/>
    <IconCard name={'minus'}/>
    <IconCard name={'expand'}/>
    <IconCard name={'th large'}/>
    <IconCard name={'align justify'}/>
    <IconCard name={'square'}/>
    <IconCard name={'circle'}/>
    <IconCard name={'info circle'}/>
    <IconCard name={'check circle'}/>
    <IconCard name={'warning sign'}/>
    <IconCard name={'remove circle'}/>
    <IconCard name={'remove'}/>
    <IconCard name={'caret down'}/>
    <IconCard name={'caret right'}/>
    <IconCard name={'check'}/>
    <IconCard name={'calendar alternate'}/>
    <IconCard name={'refresh'}/>
    <IconCard name={'eye'}/>
    <IconCard name={'eye slash'}/>
    <IconCard name={'copy'}/>
    <IconCard name={'filter'}/>
    <IconCard name={'question circle'}/>
    <IconCard name={'lock'}/>
  </ div>
))

