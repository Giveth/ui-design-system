import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconDots24: FC<IIconProps> = ({
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
			d='M13.875 4.875C13.875 3.83947 13.0355 3 12 3C10.9645 3 10.125 3.83947 10.125 4.875C10.125 5.91053 10.9645 6.75 12 6.75C13.0355 6.75 13.875 5.91053 13.875 4.875Z'
			fill='#1D1E1F'
			stroke={color}
			strokeWidth='1.5'
			strokeMiterlimit='10'
		/>
		<path
			d='M13.875 12C13.875 10.9645 13.0355 10.125 12 10.125C10.9645 10.125 10.125 10.9645 10.125 12C10.125 13.0355 10.9645 13.875 12 13.875C13.0355 13.875 13.875 13.0355 13.875 12Z'
			fill='#1D1E1F'
			stroke={color}
			strokeWidth='1.5'
			strokeMiterlimit='10'
		/>
		<path
			d='M13.875 19.125C13.875 18.0895 13.0355 17.25 12 17.25C10.9645 17.25 10.125 18.0895 10.125 19.125C10.125 20.1605 10.9645 21 12 21C13.0355 21 13.875 20.1605 13.875 19.125Z'
			fill='#1D1E1F'
			stroke={color}
			strokeWidth='1.5'
			strokeMiterlimit='10'
		/>
	</svg>
);
