import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconEye16: FC<IIconProps> = ({
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
			d='M0.666687 8C0.666687 8 3.33335 2.66667 8.00002 2.66667C12.6667 2.66667 15.3334 8 15.3334 8C15.3334 8 12.6667 13.3333 8.00002 13.3333C3.33335 13.3333 0.666687 8 0.666687 8Z'
			stroke={color}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z'
			stroke={color}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
