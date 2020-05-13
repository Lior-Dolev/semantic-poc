import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { ChipsGroup } from './index'
import {useState} from "react";

storiesOf('Semantic', module)
    .add('Chip', () => (
        <div style={{padding: 10}}>

            <h2>View Mode (read only)</h2>
            <ExampleContainerComponent />
            <br/><hr />

            <h2>Edit Mode</h2>
            <ExampleContainerComponent mode={'edit'}/>
            <br/><hr />

        </div>
    ));



function ExampleContainerComponent(props) {
    const chipsObj = {
        chip11: true,
        chip22: false,
        chip33: false,
        chip44: true,
        chip55: true,
        chip66: false,
        chip77: true,
        chip88: true,
    };

    const chipsArr = ['chip11', 'chip22', 'chip33', 'chip44', 'chip55']
    const [chips, setChips] = useState(chipsObj)

    function handleChipDelete(updatedTags) {
        setChips(updatedTags)
    }

    function handleChipAddition(updatedTags) {
        setChips(updatedTags)
    }
    return (
            <ChipsGroup
                chips={chips}
                handleChipDelete={handleChipDelete}
                handleChipAddition={handleChipAddition}
                {...props}   // pass down the 'mode' prop here
            />
        )
}

