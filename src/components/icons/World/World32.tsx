import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconWorld32: FC<IIconProps> = ({
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
			d='M16 3C8.82062 3 3 8.82062 3 16C3 23.1794 8.82062 29 16 29C23.1794 29 29 23.1794 29 16C29 8.82062 23.1794 3 16 3Z'
			stroke={color}
			stroke-width='2'
			stroke-miterlimit='10'
		/>
		<path
			d='M16 3C12.3706 3 8.95813 8.82062 8.95813 16C8.95813 23.1794 12.3706 29 16 29C19.6294 29 23.0419 23.1794 23.0419 16C23.0419 8.82062 19.6294 3 16 3Z'
			stroke={color}
			stroke-width='2'
			stroke-miterlimit='10'
		/>
		<path
			d='M7.33313 7.33313C9.72313 9.03 12.7319 10.0419 16 10.0419C19.2681 10.0419 22.2769 9.03 24.6669 7.33313M24.6669 24.6669C22.2769 22.97 19.2681 21.9581 16 21.9581C12.7319 21.9581 9.72313 22.97 7.33313 24.6669'
			stroke={color}
			stroke-width='2'
			stroke-linecap='round'
			stroke-linejoin='round'
		/>
		<path
			d='M16 3V29M29 16H3'
			stroke={color}
			stroke-width='2'
			stroke-miterlimit='10'
		/>
	</svg>
);
