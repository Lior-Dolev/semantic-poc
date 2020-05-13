import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Form } from 'semantic-ui-react'
import { FormInput } from './index'
import './story.css';


storiesOf('Semantic', module)
    .add('FormInput', () => (

        <div className={'form-input-story'}>

            <h4>Default</h4>
            <FormInput />
            <br/><hr />


            <h4>Default with label</h4>
            <FormInput label={"some label:"} />
            <br/><hr />

            <h4>Required label</h4>
            <FormInput  label={"some label:"} isRequired />
            <br/><hr />


            <h4>Inline label</h4>
            <FormInput inline label={"some label:"} />
            <br/><hr />


            <h4>Inline required label</h4>
            <FormInput  inline label={"some label:"} isRequired />
            <br/><hr />



            <div className={'side-by-side-wrapper'} style={{display: "flex"}}>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <h4>Read only- check point</h4>
                    <FormInput readOnly value={'lorem ipsum dolor'}/>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', marginLeft: '60px'}}>
                    <h4>Read only- default (Semantic UI React)</h4>
                    <Form.Input readOnly value={'lorem ipsum dolor'} style={{width: '120px', height: '30px'}}/>
                </div>
            </div>
            <br/><br/><hr />


            <div style={{display: "flex"}}>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <h4>Disabled- check point</h4>
                    <FormInput disabled value={'lorem ipsum dolor'}/>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', marginLeft: '60px'}}>
                    <h4>Disabled- default (Semantic UI React)</h4>
                    <Form.Input disabled value={'lorem ipsum dolor'} style={{width: '120px', height: '30px'}}/>
                </div>
            </div>
            <br/><br/><hr />


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

