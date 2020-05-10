import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Input as SInput } from 'semantic-ui-react'
import { Search } from './index'


storiesOf('Search', module)
    .add('Search', () => (
        <div style={{padding: 10}}>
            <h4>Default</h4>
            <Search />
            <br/><hr />


            <h4>readonly</h4>
            <Search readOnly value={"lorem ipsum dolor"} />
            <br/><hr />

            <h4>disabled</h4>
            <Search disabled value={"lorem ipsum dolor"} />
            <br/><hr />

        </ div>
    ));

