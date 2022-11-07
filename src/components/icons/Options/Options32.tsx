import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconOptions32: FC<IIconProps> = ({
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
			d='M23 8H28M23 8C23 9.10457 22.1046 10 21 10C19.8954 10 19 9.10457 19 8M23 8C23 6.89543 22.1046 6 21 6C19.8954 6 19 6.89543 19 8M4 8H19M23 24H28M23 24C23 25.1046 22.1046 26 21 26C19.8954 26 19 25.1046 19 24M23 24C23 22.8954 22.1046 22 21 22C19.8954 22 19 22.8954 19 24M4 24H19M13 16H28M13 16C13 17.1046 12.1046 18 11 18C9.89543 18 9 17.1046 9 16M13 16C13 14.8954 12.1046 14 11 14C9.89543 14 9 14.8954 9 16M4 16H9'
			stroke={color}
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
