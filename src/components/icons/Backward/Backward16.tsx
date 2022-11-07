import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconBackward16: FC<IIconProps> = ({
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
			d='M3.5 5L1.5 7L3.5 9M2 7H11.1875C13.0237 7 14.5 8.54156 14.5 10.375V11'
			stroke={color}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
