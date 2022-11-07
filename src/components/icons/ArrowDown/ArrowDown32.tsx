import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconArrowDown32: FC<IIconProps> = ({
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
			d='M16 6.66665V25.3333M16 25.3333L25.3334 16M16 25.3333L6.66669 16'
			stroke={color}
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
