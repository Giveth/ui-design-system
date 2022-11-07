import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconArrowRight32: FC<IIconProps> = ({
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
			d='M6.66665 16H25.3333M25.3333 16L16 25.3334M25.3333 16L16 6.66669'
			stroke={color}
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
