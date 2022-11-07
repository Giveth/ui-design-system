import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconPointerRight16: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => (
	<svg
		width='17'
		height={size}
		viewBox='0 0 17 16'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M1.70001 7.75H16.2M16.2 7.75L12.45 11.5M16.2 7.75L12.45 4'
			stroke={color}
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
