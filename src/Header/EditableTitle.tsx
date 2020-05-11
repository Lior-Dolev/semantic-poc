import * as React from 'react'
import {useRef, useState} from "react";
import { Input as SInput } from 'semantic-ui-react'
import classNames from 'classnames'
import '../../cp-theme/semantic.less'

export const EditableTitle = props => {
    const {
        children,
        onTitleChange
    } = props;

    const [headerContent, setHeaderContent ] = useState(children)
    const inputRef = useRef(null)
    function handleChange(e) {
        setHeaderContent(e.target.value)
    }

    function handleKeyPress(pressedKey) {
        if(pressedKey.which === 13 && headerContent) {
            pressedKey.target.blur()
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

    function activateFocus() {
        inputRef.current.focus()
    }

    const headerClasses = classNames({
        'cp-editable-title': true,
    });

    return (
        <div onMouseEnter={activateFocus}>
                <SInput
                    ref={inputRef}
                    icon
                    className={headerClasses}
                    value={headerContent}
                    onChange={handleChange}
                    onKeyPress={handleKeyPress}
                    onBlur={handleBlur}
                />
        </div>
    )
};