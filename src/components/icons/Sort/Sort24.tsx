import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconSort24: FC<IIconProps> = ({
	size = 24,
	color = 'currentColor',
}) => (
	<svg
		width={size}
		height={size}
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M10 19V5L5 10M14 5V19L19 14'
			stroke={color}
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
