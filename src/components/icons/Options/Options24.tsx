import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconOptions24: FC<IIconProps> = ({
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
			d='M17.25 6H21M17.25 6C17.25 6.82843 16.5784 7.5 15.75 7.5C14.9216 7.5 14.25 6.82843 14.25 6M17.25 6C17.25 5.17157 16.5784 4.5 15.75 4.5C14.9216 4.5 14.25 5.17157 14.25 6M3 6H14.25M17.25 18H21M17.25 18C17.25 18.8284 16.5784 19.5 15.75 19.5C14.9216 19.5 14.25 18.8284 14.25 18M17.25 18C17.25 17.1716 16.5784 16.5 15.75 16.5C14.9216 16.5 14.25 17.1716 14.25 18M3 18H14.25M9.75 12H21M9.75 12C9.75 12.8284 9.07843 13.5 8.25 13.5C7.42157 13.5 6.75 12.8284 6.75 12M9.75 12C9.75 11.1716 9.07843 10.5 8.25 10.5C7.42157 10.5 6.75 11.1716 6.75 12M3 12H6.75'
			stroke={color}
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
