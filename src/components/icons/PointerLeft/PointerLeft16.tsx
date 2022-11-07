import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconPointerLeft16: FC<IIconProps> = ({
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
			d='M16.2 7.75H1.70001M1.70001 7.75L5.45001 11.5M1.70001 7.75L5.45001 4'
			stroke={color}
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
