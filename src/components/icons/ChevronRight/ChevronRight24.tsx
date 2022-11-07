import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconChevronRight24: FC<IIconProps> = ({
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
			d='M9 6L15 12L9 18'
			stroke={color}
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
