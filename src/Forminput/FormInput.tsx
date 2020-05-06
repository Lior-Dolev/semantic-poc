import * as React from 'react'
import { Form, Icon } from 'semantic-ui-react'
import classnames from 'classnames'
import '../../cp-theme/semantic.less'

const { Input } = Form

const inputValidationStatus = {
    NONE: 'none', // default
    VALID: 'valid',
    INVALID: 'invalid',
    WARNING: 'warning',
};


export const FormInput = props => {
    const {
        placeholder,
        readOnly = false,
        disabled = false,
        isRequired = false,
        validationMode = inputValidationStatus.NONE,
        validationMessage,
    } = props;

    const formTextClasses = classnames({
        'cp-form-input': true,
        'readonly': readOnly,
        'disabled': disabled,
        'required': isRequired,
        'has-validation valid': validationMode === inputValidationStatus.VALID,
        'has-validation invalid': validationMode === inputValidationStatus.INVALID,
        'has-validation warning': validationMode === inputValidationStatus.WARNING
    });

    return (
        <>
            <Input
                className={formTextClasses}
                placeholder={placeholder || 'Enter text here...'}
                {...props}
            />
            { validationMode !== inputValidationStatus.NONE && validationMessage &&
                <span className={'validation-message'}>{validationMessage}</span> }
        </>

    )
};
































/*
* import React, {useState} from 'react'
import classNames from 'classnames/bind';
import Icon from 'front-common-icons'
import { Input } from 'antd'
import 'antd/dist/antd.less'

const { Search } = Input

const inputValidationStatus = {
    NONE: 'none', // default
    VALID: 'valid',
    INVALID: 'invalid',
    WARNING: 'warning',
};

export const FormInput = (props) => {
    const {
        placeholder,
        readOnly = false,
        disabled = false,
        isMandatory = false,
        isSearchInput = false,
        onChange
    } = props;
    const [inputValue, setInputValue] = useState('');

    const shouldDisplayValidationState = !readOnly && !disabled;

    const formInputClass = classNames({
        'cp-form-input': true,
        'mandatory': isMandatory,
        'readonly': readOnly,
        'disabled': disabled,
        'search': isSearchInput,
        'has-value': inputValue !== ''
    });

    function handleChange(e) {
        setInputValue(e.target.value);
        onChange && onChange(e)
    }

    function handleDeleteIconClick() {
        setInputValue('')
    }

    function renderSuffixIcon() {
        return <Icon
            className={"icon icon-delete"}
            name={'cancel-circle'}
            width={14}
            height={14}
            color={'#B3AA6A'}
            onClick={handleDeleteIconClick}
        />;
    }

    function renderSearchIcon() {
        return <Icon className={'icon icon-search'} name={'search'} width={14} height={14} />
    }
    return isSearchInput ? (
        <Search
            className={formInputClass}
            value={inputValue}
            onChange={handleChange}
            placeholder={placeholder || 'Search..'}
            prefix={renderSearchIcon()}
            suffix={inputValue && renderSuffixIcon()}
        />
    ) : (
        <Input
            className={formInputClass}
            placeholder={placeholder || 'Type here..'}
            value={inputValue}
            onChange={handleChange}
            prefix={isSearchInput && renderSearchIcon()}
            {...props}
        />

    )
};
*/
