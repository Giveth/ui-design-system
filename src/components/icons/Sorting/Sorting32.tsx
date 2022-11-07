import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconSorting32: FC<IIconProps> = ({
	size = 32,
	color = 'currentColor',
}) => (
	<svg
		width={size}
		height={size}
		viewBox='0 0 32 32'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M13.3333 25.3333V6.66666L6.66666 13.3333M18.6667 6.66666V25.3333L25.3333 18.6667'
			stroke={color}
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
