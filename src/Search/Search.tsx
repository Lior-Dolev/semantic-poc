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