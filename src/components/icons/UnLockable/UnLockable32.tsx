import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconUnLockable32: FC<IIconProps> = ({
	size = 32,
	color = 'currentColor',
}) => (
	<svg
		width={size}
		height={size}
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M6.667 29.333h18.666A2.667 2.667 0 0 0 28 26.667v-9.334a2.667 2.667 0 0 0-2.667-2.666H22M4 28V17.333a2.667 2.667 0 0 1 2.667-2.666h2.666m0 0V9.333a6.667 6.667 0 0 1 12.482-3.26M9.333 14.667h8m12-12-28 28'
			stroke={color}
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
