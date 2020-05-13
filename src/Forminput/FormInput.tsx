import * as React from 'react'
import { Form } from 'semantic-ui-react'
import classnames from 'classnames'
import '../../cp-theme/semantic.less'

const { Input } = Form;

const inputValidationStatus = {
    NONE: 'none', // default
    VALID: 'valid',
    INVALID: 'invalid',
    WARNING: 'warning',
};


export const FormInput = props => {
    const {
        placeholder,
        isRequired = false,
        validationMode = inputValidationStatus.NONE,
        validationMessage,
    } = props;

    function getIconName() {
        switch (validationMode) {
            case inputValidationStatus.NONE:
                return '';
            case inputValidationStatus.VALID:
                return 'check circle';
            case inputValidationStatus.INVALID:
                return 'info circle';
            case inputValidationStatus.WARNING:
                return 'warning sign';
            default:
                return ''
        }
    }

    const formTextClasses = classnames({
        'cp-form-input': true,
        'required': isRequired,
        'has-validation valid': validationMode === inputValidationStatus.VALID,
        'has-validation invalid': validationMode === inputValidationStatus.INVALID,
        'has-validation warning': validationMode === inputValidationStatus.WARNING
    });

    return (
        <>
            <Input
                icon={getIconName()}
                className={formTextClasses}
                placeholder={placeholder || 'Enter text here...'}
                {...props}
            />

            { validationMode !== inputValidationStatus.NONE && validationMessage &&
                <span className={'validation-message'}>{validationMessage}</span> }
        </>

    )
};