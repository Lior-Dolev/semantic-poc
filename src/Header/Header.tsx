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

    const headerClasses = classNames({
        'cp-header': true,
        'editable': isEditable,
    })

    function handleChange(e) {
        isEditable && setHeaderContent(e.target.value)
    }

    function handleKeyPress(pressedKey) {
        pressedKey.which === 13 && headerContent && pressedKey.target.blur()
    }

    function handleBlur({ target: {value} }) {
        console.log('value: ', value)
        if (!value) {
            console.log('oops')
            setHeaderContent(children)
        }

        handleHeaderSubmit && handleHeaderSubmit(headerContent)
    }

    return isEditable ?  (
            <SInput
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