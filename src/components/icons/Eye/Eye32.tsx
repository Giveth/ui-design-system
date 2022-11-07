import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconEye32: FC<IIconProps> = ({
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
			d='M1.33331 16C1.33331 16 6.66665 5.33334 16 5.33334C25.3333 5.33334 30.6666 16 30.6666 16C30.6666 16 25.3333 26.6667 16 26.6667C6.66665 26.6667 1.33331 16 1.33331 16Z'
			stroke={color}
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M16 20C18.2091 20 20 18.2091 20 16C20 13.7909 18.2091 12 16 12C13.7909 12 12 13.7909 12 16C12 18.2091 13.7909 20 16 20Z'
			stroke={color}
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
