import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { ChipsGroup } from './index'
import {useState} from "react";

storiesOf('Semantic', module)
    .add('Chip', () => (
        <div style={{padding: 10}}>

            <h2>View Mode (read only)</h2>
            <ExampleContainerComponent />
            <br/><br/><hr />

            <h2>Edit Mode</h2>
            <ExampleContainerComponent mode={'edit'}/>
            <br/><br/><hr />

        </div>
    ));



function ExampleContainerComponent(props) {
    const chipsExampleObj = {
        chip11: true,
        chip22: false,
        chip33: false,
        chip44: true,
        chip55: true,
        chip66: false,
        chip77: true,
        chip88: true,
    };
    const [chips, setChips] = useState(chipsExampleObj)

    function handleChipDelete(updatedTags) {
        console.log('contianer component got: ', updatedTags)
        setChips(updatedTags)
    }

    function handleChipAddition(updatedTags) {
        console.log('container component got: ', updatedTags)
        setChips(updatedTags)
    }

    return (
            <ChipsGroup
                chips={chips}
                handleChipDelete={handleChipDelete}
                handleChipAddition={handleChipAddition}
                {...props}   // just for passing down the 'mode' prop.. should be passed explicitly in regular use
            />
        )
}

