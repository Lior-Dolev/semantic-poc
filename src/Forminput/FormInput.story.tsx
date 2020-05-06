import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { FormInput } from './index'

storiesOf('FormInput', module)
    .add('FormInput', () => (
        <div style={{padding: 10}}>

            <h4>Default</h4>
            <FormInput />
            <br/><hr />


            <h4>Default with label</h4>
            <FormInput label={"some label:"} />
            <br/><hr />


            <h4>Required</h4>
            <FormInput label={"some label:"} isRequired />
            <br/><hr />


            <h4>Read only</h4>
            <FormInput readOnly value={'lorem ipsum dolor'}/>
            <br/><hr />


            <h4>Disabled</h4>
            <FormInput disabled value={'lorem ipsum dolor'}/>
            <br/><hr />


            <h4>Valid</h4>
            <FormInput
                value={'lorem ipsum'}
                validationMode={'valid'}
                validationMessage={'Lorem ipsum dolor sit amet'}
            />
            <br/><hr />


            <h4>Invalid</h4>
            <FormInput
                value={'lorem ipsum'}
                validationMode={'invalid'}
                validationMessage={'Lorem ipsum dolor sit amet'}
            />
            <br/><hr />


            <h4>Warning</h4>
            <FormInput
                value={'lorem ipsum'}
                validationMode={'warning'}
                validationMessage={'Lorem ipsum dolor sit amet'}
            />
            <br/><hr />

        </ div>
    ));
