import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconOptions16: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => (
	<svg
		width={size}
		height={size}
		viewBox='0 0 14 12'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M10.5 2H13M10.5 2C10.5 2.55228 10.0523 3 9.5 3C8.94772 3 8.5 2.55228 8.5 2M10.5 2C10.5 1.44772 10.0523 1 9.5 1C8.94772 1 8.5 1.44772 8.5 2M1 2H8.5M10.5 10H13M10.5 10C10.5 10.5523 10.0523 11 9.5 11C8.94772 11 8.5 10.5523 8.5 10M10.5 10C10.5 9.44772 10.0523 9 9.5 9C8.94772 9 8.5 9.44772 8.5 10M1 10H8.5M5.5 6H13M5.5 6C5.5 6.55228 5.05228 7 4.5 7C3.94772 7 3.5 6.55228 3.5 6M5.5 6C5.5 5.44772 5.05228 5 4.5 5C3.94772 5 3.5 5.44772 3.5 6M1 6H3.5'
			stroke={color}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
