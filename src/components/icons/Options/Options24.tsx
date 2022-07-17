import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconOptions24: FC<IIconProps> = ({
	size = 24,
	color = 'currentColor',
}) => (
	<svg
		width={size}
		height={size}
		viewBox='0 0 20 18'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M15.25 3H19M15.25 3C15.25 3.82843 14.5784 4.5 13.75 4.5C12.9216 4.5 12.25 3.82843 12.25 3M15.25 3C15.25 2.17157 14.5784 1.5 13.75 1.5C12.9216 1.5 12.25 2.17157 12.25 3M1 3H12.25M15.25 15H19M15.25 15C15.25 15.8284 14.5784 16.5 13.75 16.5C12.9216 16.5 12.25 15.8284 12.25 15M15.25 15C15.25 14.1716 14.5784 13.5 13.75 13.5C12.9216 13.5 12.25 14.1716 12.25 15M1 15H12.25M7.75 9H19M7.75 9C7.75 9.82843 7.07843 10.5 6.25 10.5C5.42157 10.5 4.75 9.82843 4.75 9M7.75 9C7.75 8.17157 7.07843 7.5 6.25 7.5C5.42157 7.5 4.75 8.17157 4.75 9M1 9H4.75'
			stroke={color}
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
