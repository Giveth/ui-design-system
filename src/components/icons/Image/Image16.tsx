import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconImage16: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => (
	<svg
		width={size}
		height={size}
		viewBox='0 0 16 16'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M12.6667 2H3.33333C2.59695 2 2 2.59695 2 3.33333V12.6667C2 13.403 2.59695 14 3.33333 14H12.6667C13.403 14 14 13.403 14 12.6667V3.33333C14 2.59695 13.403 2 12.6667 2Z'
			stroke={color}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.66667 6.66667C6.21896 6.66667 6.66667 6.21896 6.66667 5.66667C6.66667 5.11439 6.21896 4.66667 5.66667 4.66667C5.11439 4.66667 4.66667 5.11439 4.66667 5.66667C4.66667 6.21896 5.11439 6.66667 5.66667 6.66667Z'
			stroke={color}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M14 10L10.6667 6.66667L3.33333 14'
			stroke={color}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
