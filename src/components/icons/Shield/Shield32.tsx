import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconShield32: FC<IIconProps> = ({
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
			d='M16 29.3333C16 29.3333 26.6667 24 26.6667 16V6.66666L16 2.66666L5.33334 6.66666V16C5.33334 24 16 29.3333 16 29.3333Z'
			stroke={color}
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
