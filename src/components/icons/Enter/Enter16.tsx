import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconEnter16: FC<IIconProps> = ({
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
			d='M11.5 2.5V9.33136H3M3 9.33136L5.5 11.8314M3 9.33136L5.5 6.83136'
			stroke={color}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
