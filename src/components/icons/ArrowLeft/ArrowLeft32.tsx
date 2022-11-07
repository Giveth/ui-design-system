import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconArrowLeft32: FC<IIconProps> = ({
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
			d='M25.3333 16H6.66663M6.66663 16L16 25.3334M6.66663 16L16 6.66669'
			stroke={color}
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
