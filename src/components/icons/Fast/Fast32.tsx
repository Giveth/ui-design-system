import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconFast32: FC<IIconProps> = ({
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
			d='M18.5793 4L30 4M6.20692 16L27.6207 16M2.40002 28L22.8621 28'
			stroke={color}
			strokeWidth='2'
			strokeLinecap='round'
		/>
	</svg>
);
