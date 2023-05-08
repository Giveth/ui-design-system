import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconFlag32: FC<IIconProps> = ({
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
			d='M5.33331 20C5.33331 20 6.66665 18.6667 10.6666 18.6667C14.6666 18.6667 17.3333 21.3333 21.3333 21.3333C25.3333 21.3333 26.6666 20 26.6666 20V4.00001C26.6666 4.00001 25.3333 5.33334 21.3333 5.33334C17.3333 5.33334 14.6666 2.66667 10.6666 2.66667C6.66665 2.66667 5.33331 4.00001 5.33331 4.00001V20Z'
			stroke={color}
			stroke-width='2'
			stroke-linecap='round'
			stroke-linejoin='round'
		/>
		<path
			d='M5.33331 29.3333V20'
			stroke={color}
			stroke-width='2'
			stroke-linecap='round'
			stroke-linejoin='round'
		/>
	</svg>
);
