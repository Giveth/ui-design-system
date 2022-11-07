import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconCheckboxFilled32: FC<IIconProps> = ({
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
			d='M25 4H7C5.34315 4 4 5.34315 4 7V25C4 26.6569 5.34315 28 7 28H25C26.6569 28 28 26.6569 28 25V7C28 5.34315 26.6569 4 25 4Z'
			fill={color}
			stroke={color}
			strokeWidth='2'
			strokeLinejoin='round'
		/>
		<path
			d='M22 11L13.6 21L10 17'
			stroke='white'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
