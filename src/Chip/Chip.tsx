import * as React from 'react'
import Icon from 'front-common-icons'
import classNames from 'classnames'
import '../../cp-theme/semantic.less'
import './index.css'
import {useEffect, useState} from "react";


export const ChipsGroup = props => {
    const {
        chips,
        handleChipDelete,
        theme = 'solid'
    } = props;

    function renderChip(chipText) {
        return (
            <Chip
                key={chipText}
                chipText={chipText}
                handleChipDelete={handleChipDelete}
                theme={theme}
            />
        )
    }

    return (
        chips.map(renderChip)
    )
};


export const Chip = props => {
    const {
        chipText ,
        children,
        handleChipDelete,
        theme = 'solid',
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
        return theme === 'solid' ? 7 : 10
    }


    const chipClasses = classNames({
        'cp-chip': true,
        'solid-theme': theme === 'solid',
        'blue-theme': theme === 'blue',
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
