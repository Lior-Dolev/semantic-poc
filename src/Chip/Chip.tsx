import * as React from 'react'
import Icon from 'front-common-icons'
import { WithContext as ReactTags } from 'react-tag-input';
import classNames from 'classnames'
import '../../cp-theme/semantic.less'
import './index.css'
import {useEffect, useState} from "react";


export const ChipsGroup = props => {
    const {
        chips,
        handleChipDelete,
        mode = 'view'
    } = props;

    const KeyCodes = {
        comma: 188,
        enter: 13,
    };

    const delimiters = [KeyCodes.comma, KeyCodes.enter];

    const [stateTags, setTags] = useState([
        { id: "Thailand", text: "Thailand" },
        { id: "India", text: "India" },
        { id: "Thailand", text: "Thailand" },
        { id: "India", text: "India" },
        { id: "Thailand", text: "Thailand" },
        { id: "India", text: "India" }
    ])
    const [stateSuggestions, setSuggestions] = useState([
        { id: 'USA', text: 'USA' },
        { id: 'Germany', text: 'Germany' },
        { id: 'Austria', text: 'Austria' },
        { id: 'Costa Rica', text: 'Costa Rica' },
        { id: 'Sri Lanka', text: 'Sri Lanka' },
        { id: 'Thailand', text: 'Thailand' }
    ])

    function handleDelete(i) {
        console.log('handleDelete', i)
        // const tags  = stateTags;
        // setTags(tags);
    };

    function handleAddition(tag) {
        setTags(stateTags);
    };

    // function handleDrag(tag, currPos, newPos) {
    //     const tags = [...tags];
    //     const newTags = tags.slice();
    //
    //     newTags.splice(currPos, 1);
    //     newTags.splice(newPos, 0, tag);
    //
    //     // re-render
    //     setTags(newTags)
    // }

    const chipsGroupClasses = classNames({
        'cp-chips-group': true,
        'view-mode': mode === 'view',
        'edit-mode': mode === 'edit',
    })

    return (
        <div className={chipsGroupClasses}>
            <ReactTags
                allowDragDrop={false}
                tags={stateTags}
                suggestions={stateSuggestions}
                handleDelete={handleDelete}
                handleAddition={handleAddition}
                handleDrag={() => console.log('hey')}
                delimiters={delimiters}
            />
            {mode === 'edit' && <button>ADD</button>}
            {/*on click display input line..*/}
        </div>
    )

    // function renderChip(chipText) {
    //     return (
    //         <Chip
    //             key={chipText}
    //             chipText={chipText}
    //             handleChipDelete={handleChipDelete}
    //             mode={mode}
    //         />
    //     )
    // }
    //
    // return (
    //     chips.map(renderChip)
    // )
};


export const Chip = props => {
    const {
        chipText ,
        children,
        handleChipDelete,
        mode = 'view',
    } = props;

    const [shouldDeleteChip, setShouldDeleteChip] = useState(false)

    useEffect(() => {
        if(shouldDeleteChip) {
            handleChipDelete && handleChipDelete(chipText)
        }
    }, [shouldDeleteChip])

    function handleCloseClick() {
        setShouldDeleteChip(true)
    }

    function calculateIconSize() {
        return mode === 'view' ? 7 : 10
    }


    const chipClasses = classNames({
        'cp-chip': true,
        'solid-theme': mode === 'view',
        'blue-theme': mode === 'edit',
    });

    return (
        <span
            className={chipClasses}
        >
            <span className={'inner'}>{chipText || children}</span>
            <Icon
                className={'cross'}
                name={'cross'}
                width={calculateIconSize()}
                height={calculateIconSize()}
                onClick={handleCloseClick}
            />
        </span>
    )
};
