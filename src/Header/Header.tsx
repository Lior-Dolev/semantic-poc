import * as React from 'react'
import { Header as SHeader, Input as SInput} from 'semantic-ui-react'
import classNames from 'classnames'
import '../../cp-theme/semantic.less'
import {useRef, useState} from "react";


export const Header = props => {
    const {
        children,
        isEditable,
        handleHeaderSubmit
    } = props;

    const [headerContent, setHeaderContent ] = useState(children)

    const headerClasses = classNames({
        'cp-header': true,
        'editable': isEditable,
    })

    function handleChange(e) {
        isEditable && setHeaderContent(e.target.value)
    }

    function handleKeyPress(pressedKey) {
        if(pressedKey.which === 13) {
            pressedKey.target.blur()
            handleHeaderSubmit && handleHeaderSubmit(headerContent)
        }
    }

    return isEditable ?  (
            <SInput
                className={headerClasses}
                value={headerContent}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
            />
    ) : (
        <SHeader className={headerClasses}>{children}</SHeader>
    )
};