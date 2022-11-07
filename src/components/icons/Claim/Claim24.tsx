import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconClaim24: FC<IIconProps> = ({
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
			d='M6 15C6 15 7 14 10 14C13 14 15 16 18 16C21 16 22 15 22 15V3C22 3 21 4 18 4C15 4 13 2 10 2C7 2 6 3 6 3V15ZM6 15V22M10.5 22.5H1.5'
			stroke={color}
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
