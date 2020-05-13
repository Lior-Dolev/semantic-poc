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
    const chipsObj = {
        chip11: true,
        chip22: false,
        chip33: false,
        chip44: true,
        chip55: true,
    };

    const chipsArr = ['chip11', 'chip22', 'chip33', 'chip44', 'chip55']
    const [chips, setChips] = useState(chipsArr)

    function handleChipDelete(chipToDelete) {
        console.log('got chip: ', chipToDelete)
        // setChips(chips.filter(chip => chip !== chipToDelete))
    }
    return (
            <ChipsGroup
                chips={chips}
                handleChipDelete={handleChipDelete}
                mode={'edit'} // view || edit? something like that
            />
        )
}

