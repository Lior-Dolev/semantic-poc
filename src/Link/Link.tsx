// import * as React from 'react';
// import classnames from 'classnames'
// import { Segment } from 'semantic-ui-react'

// interface LinkProps {
// 	icon?: React.ReactNode;
// 	text?: string;
// }

// export const Link = (props: LinkProps) => {
// 	const {
// 		icon,
// 		text,
// 		...rest
// 	} = props
// 	const className = classnames('cp-link')
// 	return (
// 		<Segment className={className}{...rest}>
// 			<a href="url"><span className={'link-text'}>{icon}</span></a>
// 			<span className={'link-text'}>{text}</span>
// 		</Segment>
// 	)
// }

import * as React from 'react';
import classnames from 'classnames'
import { List as Llist, ListProps } from 'semantic-ui-react'

interface LinkProps extends ListProps {
	icon?: React.ReactNode;
	text?: string;
}

export const Link = (props: LinkProps) => {
	const {
		icon,
		text,
		...rest
	} = props
	const className = classnames('cp-link')
	return (
		<Llist link className={className}{...rest}>
			<Llist.Item as='a'>{icon}{text}</Llist.Item>
		</Llist>
	)
}