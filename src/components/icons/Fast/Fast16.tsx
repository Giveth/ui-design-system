import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconFast16: FC<IIconProps> = ({
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
			d='M9.20002 3L14 3M4.00002 8L13 8M2.40002 13L11 13'
			stroke={color}
			strokeWidth='2'
			strokeLinecap='round'
		/>
	</svg>
);
