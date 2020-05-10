import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Form } from 'semantic-ui-react'
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

            <div style={{display: "flex"}}>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <h4>Read only- check point</h4>
                    <FormInput readOnly value={'lorem ipsum dolor'}/>
                    <br/><hr />
                </div>
                <div style={{display: 'flex', flexDirection: 'column', marginLeft: '60px'}}>
                    <h4>Read only- default (Semantic UI React)</h4>
                    <Form.Input readOnly value={'lorem ipsum dolor'} style={{width: '120px', height: '30px'}}/>
                    <br/><hr />
                </div>
            </div>


            <div style={{display: "flex"}}>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <h4>Read only- check point</h4>
                    <FormInput disabled value={'lorem ipsum dolor'}/>
                    <br/><hr />
                </div>
                <div style={{display: 'flex', flexDirection: 'column', marginLeft: '60px'}}>
                    <h4>Read only- default (Semantic UI React)</h4>
                    <Form.Input disabled value={'lorem ipsum dolor'} style={{width: '120px', height: '30px'}}/>
                    <br/><hr />
                </div>
            </div>


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
