import * as React from 'react'
import { Search as SemanticSearch, Input as SInput } from 'semantic-ui-react'
import classnames from 'classnames'
import '../../cp-theme/semantic.less'


export const Search = props => {
    const {
        placeholder,
    } = props;

    const formTextClasses = classnames({
        'cp-search-input': true,
    });

    return (
        <>
            <SemanticSearch
                className={formTextClasses}
                placeholder={placeholder || 'Search...'}
                // icon={'setting'}     //TODO:: fix the import process of the icons..
                {...props}
            />
        </>
    )
};












/* TODO:: DELETE..
* import React, {useState} from 'react'
import classNames from 'classnames/bind';
import Icon from 'front-common-icons'
import { Search } from 'antd'
import 'antd/dist/antd.less'

const { Search } = Search

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
        <Search
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
