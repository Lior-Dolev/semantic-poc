import * as React from 'react'
import {useState} from "react";
import { Header as SHeader, Input as SInput} from 'semantic-ui-react'
import classNames from 'classnames'
import '../../cp-theme/semantic.less'

export const Header = props => {
    const {
        children,
        isEditable,
        handleHeaderSubmit
    } = props;

    const [headerContent, setHeaderContent ] = useState(children)

    function handleChange(e) {
        isEditable && setHeaderContent(e.target.value)
    }

    function handleKeyPress(pressedKey) {
        if(pressedKey.which === 13 && headerContent) {
            pressedKey.target.blur()
        }
    }

    function handleBlur() {
        if (!headerContent) {
            setHeaderContent(children);
            handleHeaderSubmit && handleHeaderSubmit(children)
        } else {
            handleHeaderSubmit && handleHeaderSubmit(headerContent)
        }
    }

    const headerClasses = classNames({
        'cp-header': true,
        'editable': isEditable,
    });

    return isEditable ?  (
            <SInput
                icon
                className={headerClasses}
                value={headerContent}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                onBlur={handleBlur}
            />
    ) : (
        <SHeader className={headerClasses}>{children}</SHeader>
    )
};