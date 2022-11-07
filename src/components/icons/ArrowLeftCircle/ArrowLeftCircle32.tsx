import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconArrowLeftCircle32: FC<IIconProps> = ({
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
			d='M16 10.6667L10.6667 16M10.6667 16L16 21.3334M10.6667 16H21.3334M29.3334 16C29.3334 23.3638 23.3638 29.3334 16 29.3334C8.63622 29.3334 2.66669 23.3638 2.66669 16C2.66669 8.63622 8.63622 2.66669 16 2.66669C23.3638 2.66669 29.3334 8.63622 29.3334 16Z'
			stroke={color}
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
