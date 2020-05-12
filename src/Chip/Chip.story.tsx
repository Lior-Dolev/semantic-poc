import * as React from 'react'
import { storiesOf } from '@storybook/react'
import {ChipsGroup, Chip} from './index'
import {useState} from "react";

storiesOf('Semantic', module)
    .add('Chip', () => (
        <div style={{padding: 10}}>

            <h2>Regular:</h2>
            <ExampleContainerComponent />
            <br/><hr />

        </div>
    ));


function ExampleContainerComponent() {
    const [arrOfChips, setArrOfChips] = useState(['chip 11', 'chip 22', 'chip 33', 'chip 44'])

    function handleChipDelete(chipToDelete) {
        console.log('got chip: ', chipToDelete)
        setArrOfChips(arrOfChips.filter(chip => chip !== chipToDelete))
    }
    return (
        <ChipsGroup
            chips={arrOfChips}
            handleChipDelete={handleChipDelete}
            // theme={'blue'}
        />
    )
}

