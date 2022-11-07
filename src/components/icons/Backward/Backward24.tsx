import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconBackward24: FC<IIconProps> = ({
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
			d='M5.25 7.5L2.25 10.5L5.25 13.5M3 10.5H16.7812C19.5356 10.5 21.75 12.8123 21.75 15.5625V16.5'
			stroke={color}
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
