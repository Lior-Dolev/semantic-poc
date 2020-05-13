import * as React from 'react'
import {useEffect, useState} from "react";
import { WithContext as ReactTags } from 'react-tag-input';
import classNames from 'classnames'
import { Icon } from '../Icon'
import '../../cp-theme/semantic.less'
import './index.css'

const KeyCodes = {
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
    const [shouldDisplayInput, setShouldDisplayInput] = useState(false)

    useEffect(() => {
        let normalizedTags = [];
        let tmp = Object.keys(chips);
        normalizedTags = tmp.map(tag => {
            return {id: tag, text: tag, boolValue: chips[tag]}
        });
        setTags(normalizedTags)
    }, [chips]);

    const delimiters = [KeyCodes.enter];

    function convertArrayToNormalizedObject(arrOfTags) {
        const tagsObj = {};
        arrOfTags.forEach(tag => {
            tagsObj[tag.id]= tag['boolValue'];
        });
        return tagsObj
    }

    function handleDelete(indexToDelete) {
        const updatedTags  = [...stateTags];
        updatedTags.splice(indexToDelete, 1);
        const tagsObj = convertArrayToNormalizedObject(updatedTags);
        handleChipDelete(tagsObj);
    };

    function handleAddition(tag) {
        const newTag = {...tag};
        newTag['boolValue']= true;  // default value will be true?? //TODO:: (YANIV) check requirments
        const updatedTags  = [...stateTags];
        updatedTags.push(newTag);
        const tagsObj = convertArrayToNormalizedObject(updatedTags);
        handleChipAddition(tagsObj);
    };

    function handleAddClick() {
        setShouldDisplayInput(true)
    }

    function handleInputBlur() {
        setShouldDisplayInput(false)
    }

    const chipsGroupClasses = classNames({
        'cp-chips-group': true,
        'view-mode': mode === 'view',
        'edit-mode': mode === 'edit',
        'show-input': shouldDisplayInput,
    });

    return (
        <div className={chipsGroupClasses}>
            <ReactTags
                allowDragDrop={false}
                tags={stateTags}
                handleDelete={handleDelete}
                handleAddition={handleAddition}
                handleInputBlur={handleInputBlur}
                delimiters={delimiters}
                readOnly={mode === 'view'}
                {...props}
            />
            {mode === 'edit' && <button className={'add-btn'} onClick={handleAddClick}><Icon name={'plus'} /></button>}
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
