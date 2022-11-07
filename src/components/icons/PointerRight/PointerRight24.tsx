import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconPointerRight24: FC<IIconProps> = ({
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
			d='M0.75 12.497H23.25M23.25 12.497L19.5 16.247M23.25 12.497L19.5 8.74701'
			stroke={color}
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
