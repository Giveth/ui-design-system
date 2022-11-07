import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconEmptyCircle32: FC<IIconProps> = ({
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
			d='M16 29.3333C23.3638 29.3333 29.3334 23.3638 29.3334 16C29.3334 8.6362 23.3638 2.66666 16 2.66666C8.63622 2.66666 2.66669 8.6362 2.66669 16C2.66669 23.3638 8.63622 29.3333 16 29.3333Z'
			stroke={color}
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
