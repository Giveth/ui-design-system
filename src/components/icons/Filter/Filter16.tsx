import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconFilter16: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => (
	<svg
		width={size}
		height={size}
		viewBox='0 0 16 16'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M14.6666 2H1.33331L6.66665 8.30667V12.6667L9.33331 14V8.30667L14.6666 2Z'
			stroke={color}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
