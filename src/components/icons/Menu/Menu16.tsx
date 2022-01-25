import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconMenu16: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => (
	<svg
		width={size}
		height={size}
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M2 8h12M2 4h12M2 12h12'
			stroke={color}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
