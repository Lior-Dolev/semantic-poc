import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { EditableTitle } from './index'

storiesOf('Semantic', module)
    .add('EditableTitle', () => (
        <div style={{padding: 10}}>

            <h2>Editable Header:</h2>
            <EditableTitle
                onTitleChange={(titleContent) => {console.log(`header changed to: ${titleContent}`)}}
            >
                Check point Example
            </EditableTitle>
            <br/><hr />
        </ div>
    ));

