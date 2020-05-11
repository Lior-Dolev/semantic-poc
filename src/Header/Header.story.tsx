import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Header } from './index'

storiesOf('Header', module)
    .add('Header', () => (
        <div style={{padding: 10}}>

            <h2>Regular Header:</h2>
            <Header>Check point Wiki Point</Header>
            <br/><hr />


            <h2>Editable Header:</h2>
            <Header
                isEditable
                handleHeaderSubmit={(headerContent) => {console.log(`header changed to: ${headerContent}`)}}
            >
                Check point Wiki Point
            </Header>
            <br/><hr />
        </ div>
    ));

