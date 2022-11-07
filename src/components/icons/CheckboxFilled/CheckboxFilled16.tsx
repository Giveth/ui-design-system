import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconCheckboxFilled16: FC<IIconProps> = ({
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
			d='M12.5 2H3.5C2.67157 2 2 2.67157 2 3.5V12.5C2 13.3284 2.67157 14 3.5 14H12.5C13.3284 14 14 13.3284 14 12.5V3.5C14 2.67157 13.3284 2 12.5 2Z'
			fill={color}
			stroke={color}
			strokeLinejoin='round'
		/>
		<path
			d='M11 5.5L6.8 10.5L5 8.5'
			stroke='white'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
