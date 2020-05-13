import * as React from 'react'
import { storiesOf } from '@storybook/react'
import {Form, Search as SemanticSearch} from 'semantic-ui-react'
import { Search } from './index'
import './story.css'

storiesOf('Semantic', module)
    .add('Search', () => (
        <div className={'search-story'}>
            <h4>Default</h4>
            <Search onSearchChange={(e) => {console.log('search value: ', e.target.value)}} />
            <br/><hr />

            <br/>
            <div className={'side-by-side-wrapper'} >
                <div className={'side-by-side-inner'} >
                    <h4>Read only- check point</h4>
                    <Search readOnly value={'lorem ipsum dolor'}/>
                </div>
                <div className={'side-by-side-inner'} >
                    <h4>Read only- default (Semantic UI React)</h4>
                    <SemanticSearch className={'semantic-search'} readOnly value={'lorem ipsum dolor'} />
                </div>
            </div>
            <br/><hr />

            <br/>
            <div className={'side-by-side-wrapper'} >
                <div className={'side-by-side-inner'} >
                    <h4>Disabled- check point</h4>
                    <Search disabled value={'lorem ipsum dolor'}/>
                </div>
                <div className={'side-by-side-inner'} >
                    <h4>Disabled- default (Semantic UI React)</h4>
                    <SemanticSearch className={'semantic-search'} disabled value={'lorem ipsum dolor'}/>
                </div>
            </div>
            <br/><hr />
        </ div>
    ));

