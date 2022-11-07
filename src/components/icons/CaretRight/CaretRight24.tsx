import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconCaretRight24: FC<IIconProps> = ({
	size = 24,
	color = 'currentColor',
}) => (
	<svg
		width={size}
		height={size}
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M8.87667 18.7501L16.6031 12.7779C16.7276 12.6816 16.8275 12.5622 16.896 12.4279C16.9645 12.2935 17 12.1473 17 11.9994C17 11.8515 16.9645 11.7054 16.896 11.571C16.8275 11.4367 16.7276 11.3172 16.6031 11.221L8.87667 5.24875C8.13917 4.67879 7 5.15134 7 6.02722L7 17.9734C7 18.8492 8.13917 19.3218 8.87667 18.7501Z'
			fill={color}
		/>
	</svg>
);
