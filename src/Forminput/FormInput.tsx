import * as React from 'react'
import { Form } from 'semantic-ui-react'
import classnames from 'classnames'
import '../../cp-theme/semantic.less'

const { Input } = Form

export const FormInput = props => {
    const {
        placeholder,
        readOnly=false,
        disabled=false
    } = props;
    const formTextClasses = classnames({
        'cp-form-input': true,
        'readonly': readOnly,
        'disabled': disabled
    });

    return (
            <Input
                className={formTextClasses}
                placeholder={placeholder || 'Enter text here...'}
                {...props}
            />
    )
};