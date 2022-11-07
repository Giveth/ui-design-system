import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconFilter32: FC<IIconProps> = ({
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
			d='M29.3334 4H2.66669L13.3334 16.6133V25.3333L18.6667 28V16.6133L29.3334 4Z'
			stroke={color}
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
