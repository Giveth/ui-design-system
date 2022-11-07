import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconTransfer32: FC<IIconProps> = ({
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
			d='M6.66666 13.3333H25.3333L18.6667 6.66666M25.3333 18.6667H6.66666L13.3333 25.3333'
			stroke={color}
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
