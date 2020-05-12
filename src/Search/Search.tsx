import * as React from 'react'
import { Search as SemanticSearch } from 'semantic-ui-react'
import classNames from 'classnames'
import '../../cp-theme/semantic.less'


export const Search = props => {
    const {
        placeholder,
    } = props;

    const searchClasses = classNames('cp-search-input')
    return (
        <SemanticSearch
            className={searchClasses}
            placeholder={placeholder || 'Search...'}
            input={{ icon: 'search', iconPosition: 'left' }}
            {...props}
        />
    )
};