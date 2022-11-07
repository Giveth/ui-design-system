import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconArrowUpCircle32: FC<IIconProps> = ({
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
			d='M10.6667 16L16 10.6667M16 10.6667L21.3334 16M16 10.6667V21.3334M16 29.3334C23.3638 29.3334 29.3334 23.3638 29.3334 16C29.3334 8.63622 23.3638 2.66669 16 2.66669C8.63622 2.66669 2.66669 8.63622 2.66669 16C2.66669 23.3638 8.63622 29.3334 16 29.3334Z'
			stroke={color}
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
