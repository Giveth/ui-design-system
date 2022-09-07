import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconUnLockable24: FC<IIconProps> = ({
	size = 24,
	color = 'currentColor',
}) => (
	<svg
		width={size}
		height={size}
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M5 22h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-2.5M3 21v-8a2 2 0 0 1 2-2h8m-6 0V7a5 5 0 0 1 9.361-2.445M22 2 1 23'
			stroke={color}
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
