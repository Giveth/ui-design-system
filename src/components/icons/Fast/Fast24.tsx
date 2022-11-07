import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconFast24: FC<IIconProps> = ({
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
			d='M13.8897 4L22 4M5.10347 12L20.3104 12M2.40002 20L16.9311 20'
			stroke={color}
			strokeWidth='2'
			strokeLinecap='round'
		/>
	</svg>
);
