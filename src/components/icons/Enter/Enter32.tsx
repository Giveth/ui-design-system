import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconEnter32: FC<IIconProps> = ({
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
			d='M23 5V18.6627H6M6 18.6627L11 23.6627M6 18.6627L11 13.6627'
			stroke={color}
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
