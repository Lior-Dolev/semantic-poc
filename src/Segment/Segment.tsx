import * as React from 'react'
import { Segment as Ssegment, SegmentProps } from 'semantic-ui-react'
import classnames from 'classnames'
import '../../cp-theme/semantic.less'

interface SegmentInternalProps extends SegmentProps {
	text?: string;
}

export const Segment = (props: SegmentInternalProps) => {
	const {
		text,
		...rest
	} = props;
	const className = classnames('cp-segment')

	return (
		<Ssegment secondary
			className={className}
			text={text}
			{...rest}
		></Ssegment>
	)
}