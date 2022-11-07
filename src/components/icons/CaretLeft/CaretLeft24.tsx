import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconCaretLeft24: FC<IIconProps> = ({
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
			d='M15.1233 18.7501L7.39686 12.7779C7.27239 12.6816 7.17247 12.5622 7.10397 12.4279C7.03547 12.2935 7 12.1473 7 11.9994C7 11.8515 7.03547 11.7054 7.10397 11.571C7.17247 11.4367 7.27239 11.3172 7.39686 11.221L15.1233 5.24875C15.8608 4.67879 17 5.15134 17 6.02722V17.9734C17 18.8492 15.8608 19.3218 15.1233 18.7501Z'
			fill={color}
		/>
	</svg>
);
