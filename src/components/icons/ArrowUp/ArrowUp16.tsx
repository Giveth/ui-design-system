import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconArrowUp16: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => (
	<svg
		width={size}
		height={size}
		viewBox='0 0 16 16'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M7.66667 12.3333L7.66667 3M7.66667 3L12.3333 7.66667M7.66667 3L3 7.66667'
			stroke={color}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
