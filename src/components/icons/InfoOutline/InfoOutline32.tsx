import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconInfoOutline32: FC<IIconProps> = ({
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
			fillRule='evenodd'
			clipRule='evenodd'
			d='M29 16C29 23.1797 23.1797 29 16 29C8.8203 29 3 23.1797 3 16C3 8.8203 8.8203 3 16 3C23.1797 3 29 8.8203 29 16ZM27.05 16C27.05 22.149 22.149 27.05 16 27.05C9.851 27.05 4.95 22.149 4.95 16C4.95 9.851 9.851 4.95 16 4.95C22.149 4.95 27.05 9.851 27.05 16Z'
			fill={color}
		/>
		<path
			d='M16 22V14'
			stroke={color}
			strokeWidth='2'
			strokeLinecap='round'
		/>
		<circle cx='16' cy='10.5' r='1.5' fill={color} />
	</svg>
);
