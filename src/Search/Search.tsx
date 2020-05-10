import * as React from 'react'
import { Search as SemanticSearch, Input as SInput } from 'semantic-ui-react'
import classnames from 'classnames'
import '../../cp-theme/semantic.less'


export const Search = props => {
    const {
        placeholder,
    } = props;

    return (
        <>
            <SemanticSearch
                className={'cp-search-input'}
                placeholder={placeholder || 'Search...'}
                // icon={'setting'}     //TODO:: fix the import process of the icons..
                {...props}
            />
        </>
    )
};