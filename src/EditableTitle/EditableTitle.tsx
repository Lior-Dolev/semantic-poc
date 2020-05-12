import * as React from 'react'
import {useRef, useState} from "react";
import { Input as SInput } from 'semantic-ui-react'
import classNames from 'classnames'
import {KEYS_ASCII} from './tmpConsts'
import '../../cp-theme/semantic.less'

export const EditableTitle = props => {
    const {
        children,
        onTitleChange
    } = props;

    const [headerContent, setHeaderContent ] = useState(children)
    function handleChange(e) {
        setHeaderContent(e.target.value)
    }

    function isKeyEscapeOrEnter(keyCode) {
        return (keyCode === KEYS_ASCII.enter || keyCode === KEYS_ASCII.escape)
    }

    function handleKeyPress(pressedKey) {
        if( headerContent && pressedKey.which === KEYS_ASCII.enter) {
            pressedKey.target.blur()
        }
    }

    function handleKeyDown(pressedKey) {
        if (pressedKey.keyCode === KEYS_ASCII.escape) {
            setHeaderContent(children);
            pressedKey.target.blur();
        }
    }

    function handleBlur() {
        if (!headerContent) {
            setHeaderContent(children);
            onTitleChange && onTitleChange(children)
        } else {
            onTitleChange && onTitleChange(headerContent)
        }
    }

    const headerClasses = classNames('cp-editable-title');

    return (
        <SInput
            className={headerClasses}
            value={headerContent}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
            // TODO:: {...props} talk with Lior
        />
    )
};