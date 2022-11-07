import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconShield16: FC<IIconProps> = ({
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
			d='M8 14.6667C8 14.6667 13.3333 12 13.3333 8V3.33333L8 1.33333L2.66667 3.33333V8C2.66667 12 8 14.6667 8 14.6667Z'
			stroke={color}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
