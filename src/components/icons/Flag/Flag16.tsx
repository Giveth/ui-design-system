import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconFlag16: FC<IIconProps> = ({
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
			d='M2.66669 10C2.66669 10 3.33335 9.33334 5.33335 9.33334C7.33335 9.33334 8.66669 10.6667 10.6667 10.6667C12.6667 10.6667 13.3334 10 13.3334 10V2.00001C13.3334 2.00001 12.6667 2.66668 10.6667 2.66668C8.66669 2.66668 7.33335 1.33334 5.33335 1.33334C3.33335 1.33334 2.66669 2.00001 2.66669 2.00001V10Z'
			stroke={color}
			stroke-width='1.5'
			stroke-linecap='round'
			stroke-linejoin='round'
		/>
		<path
			d='M2.66669 14.6667V10'
			stroke={color}
			stroke-width='1.5'
			stroke-linecap='round'
			stroke-linejoin='round'
		/>
	</svg>
);
