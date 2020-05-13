import * as React from 'react'
import Icon from 'front-common-icons'
import { WithContext as ReactTags } from 'react-tag-input';
import classNames from 'classnames'
import '../../cp-theme/semantic.less'
import './index.css'
import {useEffect, useState} from "react";

const KeyCodes = {
    comma: 188,
    enter: 13,
};

export const ChipsGroup = props => {
    const {
        chips,
        mode = 'view',
        handleChipDelete,
        handleChipAddition,
    } = props;

    const [stateTags, setTags] = useState([])

    useEffect(() => {
        let normalizedTags = [];
        let tmp = Object.keys(chips);
        normalizedTags = tmp.map(tag => {
            return {id: tag, text: tag, boolValue: chips[tag]}
        });
        setTags(normalizedTags)
    }, [chips]);

    const delimiters = [KeyCodes.comma, KeyCodes.enter];

    function handleDelete(i) {
        const updatedTags  = [...stateTags];
        updatedTags.splice(i, 1);
        const tagsObj = {};
        updatedTags.forEach(tag => {
            tagsObj[tag.id]= tag['boolValue'];
        });
        handleChipDelete(tagsObj)
    };

    function handleAddition(tag) {
        console.log('tag: ', tag)
        const newTag = {...tag}
        newTag['boolValue']= true;
        const updatedTags  = [...stateTags];
        updatedTags.push(newTag);
        const tagsObj = {};
        updatedTags.forEach(tag => {
            tagsObj[tag.id]= tag['boolValue'];
        });
        handleChipAddition(tagsObj)

    };


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
                handleDelete={handleDelete}
                handleAddition={handleAddition}
                delimiters={delimiters}
                readOnly={mode === 'view'}
                {...props}
            />
            {mode === 'edit' && <button>ADD</button>}
            {/*on click display input line..*/}
        </div>
    )
};













//
//
//
// export const Chip = props => {
//     const {
//         chipText ,
//         children,
//         handleChipDelete,
//         mode = 'view',
//     } = props;
//
//     const [shouldDeleteChip, setShouldDeleteChip] = useState(false)
//
//     useEffect(() => {
//         if(shouldDeleteChip) {
//             handleChipDelete && handleChipDelete(chipText)
//         }
//     }, [shouldDeleteChip])
//
//     function handleCloseClick() {
//         setShouldDeleteChip(true)
//     }
//
//     function calculateIconSize() {
//         return mode === 'view' ? 7 : 10
//     }
//
//
//     const chipClasses = classNames({
//         'cp-chip': true,
//         'solid-theme': mode === 'view',
//         'blue-theme': mode === 'edit',
//     });
//
//     return (
//         <span
//             className={chipClasses}
//         >
//             <span className={'inner'}>{chipText || children}</span>
//             <Icon
//                 className={'cross'}
//                 name={'cross'}
//                 width={calculateIconSize()}
//                 height={calculateIconSize()}
//                 onClick={handleCloseClick}
//             />
//         </span>
//     )
// };
