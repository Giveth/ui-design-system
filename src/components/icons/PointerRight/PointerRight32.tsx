import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconPointerRight32: FC<IIconProps> = ({
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
			d='M0.999999 16.6627H31M31 16.6627L26 21.6627M31 16.6627L26 11.6627'
			stroke={color}
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
