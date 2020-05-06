import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { FormInput } from './index'

storiesOf('Forminput', module)
    .add('Forminput', () => (
        <div style={{padding: 10}}>
            <h4>Default</h4>
            <FormInput />
            <br/><hr />

            <h4>Default with label</h4>

            <FormInput label={"some label:"} />
            <br/><hr />

            <h4>Read only</h4>
            <FormInput readOnly value={'lorem ipsum dolor'}/>
            <br/><hr />

            <h4>Disabled</h4>
            <FormInput disabled value={'lorem ipsum dolor'}/>
            <br/><hr />

        </ div>
    ));

