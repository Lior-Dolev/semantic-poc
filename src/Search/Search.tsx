import * as React from 'react'
import { Search as SemanticSearch } from 'semantic-ui-react'
import '../../cp-theme/semantic.less'


export const Search = props => {
    const {
        placeholder,
    } = props;

    return (
        <SemanticSearch
            className={'cp-search-input'}
            placeholder={placeholder || 'Search...'}
            input={{ icon: 'search', iconPosition: 'left' }}
            {...props}
        />
    )
};