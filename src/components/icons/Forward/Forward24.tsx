import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconForward24: FC<IIconProps> = ({
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
			d='M18.75 7.5L21.75 10.5L18.75 13.5M21 10.5H7.21875C4.46438 10.5 2.25 12.8123 2.25 15.5625V16.5'
			stroke={color}
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
